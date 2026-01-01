import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DIRECT_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

async function main() {
  console.log("🌱 Seeding Babua LMS courses...");

  // ===============================
  // COURSES
  // ===============================

  const courses = {
    dsa: await prisma.course.upsert({
      where: { title: "DSA – Pattern Based" },
      update: {},
      create: {
        title: "DSA – Pattern Based",
        description: "Interview-focused DSA using repeatable patterns",
        totalLectures: 4,
        difficulty: "INTERMEDIATE",
      },
    }),

    systemDesign: await prisma.course.upsert({
      where: { title: "System Design" },
      update: {},
      create: {
        title: "System Design",
        description: "Design scalable systems from basics to advanced",
        totalLectures: 4,
        difficulty: "ADVANCED",
      },
    }),

    lld: await prisma.course.upsert({
      where: { title: "Low Level Design (LLD)" },
      update: {},
      create: {
        title: "Low Level Design (LLD)",
        description: "Object-oriented design and class-level thinking",
        totalLectures: 3,
        difficulty: "INTERMEDIATE",
      },
    }),

    os: await prisma.course.upsert({
      where: { title: "Operating Systems" },
      update: {},
      create: {
        title: "Operating Systems",
        description: "Core OS concepts for interviews and fundamentals",
        totalLectures: 4,
        difficulty: "BEGINNER",
      },
    }),

    cn: await prisma.course.upsert({
      where: { title: "Computer Networks" },
      update: {},
      create: {
        title: "Computer Networks",
        description: "Networking fundamentals every engineer must know",
        totalLectures: 4,
        difficulty: "BEGINNER",
      },
    }),

    dbms: await prisma.course.upsert({
      where: { title: "DBMS – Babua Edition" },
      update: {},
      create: {
        title: "DBMS – Babua Edition",
        description: "DBMS concepts that actually matter in interviews",
        totalLectures: 4,
        difficulty: "BEGINNER",
      },
    }),
  };

  // ===============================
  // REMOVE OLD LECTURES
  // ===============================

  await prisma.lecture.deleteMany({
    where: {
      courseId: {
        in: Object.values(courses).map(c => c.id),
      },
    },
  });

  // ===============================
  // LECTURES
  // ===============================

  await prisma.lecture.createMany({
    data: [
      // ================= DSA =================
      {
        courseId: courses.dsa.id,
        title: "Why DSA Patterns Matter",
        description: "How patterns reduce brute force thinking",
        videoUrl: "https://www.youtube.com/embed/Dp0sZC0Y-9c",
        order: 1,
        takeaways: [
          "Why brute force fails in interviews",
          "What patterns are",
          "How patterns improve speed",
        ],
      },
      {
        courseId: courses.dsa.id,
        title: "Two Pointer Pattern",
        description: "Optimizing array and string problems",
        videoUrl: "https://www.youtube.com/embed/Qf9T3l0t1jA",
        order: 2,
        takeaways: [
          "When to use two pointers",
          "Left-right traversal",
          "Common interview problems",
        ],
      },
      {
        courseId: courses.dsa.id,
        title: "Sliding Window Pattern",
        description: "Efficient subarray and substring problems",
        videoUrl: "https://www.youtube.com/embed/MK-NZ4hN7rs",
        order: 3,
        takeaways: [
          "Fixed vs variable window",
          "Optimizing O(n²) to O(n)",
        ],
      },
      {
        courseId: courses.dsa.id,
        title: "Hashing Pattern",
        description: "Using maps and sets to optimize lookups",
        videoUrl: "https://www.youtube.com/embed/KEs5UyBJ39g",
        order: 4,
        takeaways: [
          "Frequency counting",
          "Lookup optimization",
        ],
      },

      // ================= SYSTEM DESIGN =================
      {
        courseId: courses.systemDesign.id,
        title: "System Design Basics",
        description: "How to approach system design interviews",
        videoUrl: "https://www.youtube.com/embed/UzLMhqg3_Wc",
        order: 1,
        takeaways: [
          "Interview expectations",
          "High-level thinking",
        ],
      },
      {
        courseId: courses.systemDesign.id,
        title: "Load Balancers & Caching",
        description: "Handling scale efficiently",
        videoUrl: "https://www.youtube.com/embed/4yZ0KJ2gM0A",
        order: 2,
        takeaways: [
          "Why load balancers matter",
          "Caching strategies",
        ],
      },
      {
        courseId: courses.systemDesign.id,
        title: "Database Scaling",
        description: "Sharding, replication, and tradeoffs",
        videoUrl: "https://www.youtube.com/embed/rhHux2Ue5yg",
        order: 3,
        takeaways: [
          "Vertical vs horizontal scaling",
          "CAP theorem basics",
        ],
      },
      {
        courseId: courses.systemDesign.id,
        title: "Designing a URL Shortener",
        description: "End-to-end design example",
        videoUrl: "https://www.youtube.com/embed/fMZMm_0ZhK4",
        order: 4,
        takeaways: [
          "Breaking problems down",
          "Tradeoff discussion",
        ],
      },

      // ================= LLD =================
      {
        courseId: courses.lld.id,
        title: "OOP Principles",
        description: "SOLID principles explained simply",
        videoUrl: "https://www.youtube.com/embed/rtmFCcjEgEw",
        order: 1,
        takeaways: [
          "SOLID principles",
          "Why clean code matters",
        ],
      },
      {
        courseId: courses.lld.id,
        title: "Class Design",
        description: "Designing maintainable classes",
        videoUrl: "https://www.youtube.com/embed/6T_HgnjoYwM",
        order: 2,
        takeaways: [
          "Responsibility separation",
          "Encapsulation",
        ],
      },
      {
        courseId: courses.lld.id,
        title: "Design Patterns Overview",
        description: "Factory, Singleton, Observer",
        videoUrl: "https://www.youtube.com/embed/NU_1StN5Tkk",
        order: 3,
        takeaways: [
          "When to use patterns",
          "Avoiding overengineering",
        ],
      },

      // ================= OS =================
      {
        courseId: courses.os.id,
        title: "What is an Operating System?",
        description: "Role of OS in a computer",
        videoUrl: "https://www.youtube.com/embed/26QPDBe-NB8",
        order: 1,
        takeaways: [
          "OS responsibilities",
          "User vs kernel mode",
        ],
      },
      {
        courseId: courses.os.id,
        title: "Process vs Thread",
        description: "Concurrency basics",
        videoUrl: "https://www.youtube.com/embed/ITc09gOrqZk",
        order: 2,
        takeaways: [
          "Process lifecycle",
          "Thread advantages",
        ],
      },
      {
        courseId: courses.os.id,
        title: "CPU Scheduling",
        description: "Scheduling algorithms",
        videoUrl: "https://www.youtube.com/embed/OPv8hA1YtWc",
        order: 3,
        takeaways: [
          "FCFS, SJF, Round Robin",
        ],
      },
      {
        courseId: courses.os.id,
        title: "Deadlocks",
        description: "Deadlock conditions and prevention",
        videoUrl: "https://www.youtube.com/embed/UVoH8j0fJ6o",
        order: 4,
        takeaways: [
          "Deadlock conditions",
          "Avoidance strategies",
        ],
      },

      // ================= CN =================
      {
        courseId: courses.cn.id,
        title: "Computer Networks Overview",
        description: "How the internet works",
        videoUrl: "https://www.youtube.com/embed/qiQR5rTSshw",
        order: 1,
        takeaways: [
          "Network basics",
          "Client-server model",
        ],
      },
      {
        courseId: courses.cn.id,
        title: "OSI Model",
        description: "Layered networking",
        videoUrl: "https://www.youtube.com/embed/Ilk7UXzV_Qc",
        order: 2,
        takeaways: [
          "7 OSI layers",
          "Layer responsibilities",
        ],
      },
      {
        courseId: courses.cn.id,
        title: "TCP vs UDP",
        description: "Reliable vs fast protocols",
        videoUrl: "https://www.youtube.com/embed/FYxF1FZ1F5Y",
        order: 3,
        takeaways: [
          "Connection-oriented vs stateless",
        ],
      },
      {
        courseId: courses.cn.id,
        title: "HTTP & HTTPS",
        description: "Web communication fundamentals",
        videoUrl: "https://www.youtube.com/embed/iYM2zFP3Zn0",
        order: 4,
        takeaways: [
          "Request-response cycle",
          "TLS basics",
        ],
      },

      // ================= DBMS =================
      {
        courseId: courses.dbms.id,
        title: "Introduction to DBMS",
        description: "Why databases exist",
        videoUrl: "https://www.youtube.com/embed/H9AqFz90yXo",
        order: 1,
        takeaways: [
          "DBMS purpose",
          "Real-world examples",
        ],
      },
      {
        courseId: courses.dbms.id,
        title: "ER Model",
        description: "Entities and relationships",
        videoUrl: "https://www.youtube.com/embed/4Z9KEBexzcM",
        order: 2,
        takeaways: [
          "ER components",
          "Diagram rules",
        ],
      },
      {
        courseId: courses.dbms.id,
        title: "Relational Model",
        description: "Tables and keys",
        videoUrl: "https://www.youtube.com/embed/y5dK7bA7d14",
        order: 3,
        takeaways: [
          "Primary vs foreign keys",
        ],
      },
      {
        courseId: courses.dbms.id,
        title: "Normalization",
        description: "Designing efficient schemas",
        videoUrl: "https://www.youtube.com/embed/VG7zG9Z9aEo",
        order: 4,
        takeaways: [
          "Normal forms",
          "Reducing redundancy",
        ],
      },
    ],
  });

  console.log("✅ All courses seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
