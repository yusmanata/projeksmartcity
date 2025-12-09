import { reactive } from "vue";

export const reportStore = reactive({
  reports: [
    {
      id: 1,
      title: "Banjir Bandang di Jalan Merdeka",
      desc: "Banjir menggenangi jalan utama setelah hujan deras.",
      location: "Jl. Merdeka No. 45, Balikpapan",
      date: "20 November 2025",
      img: "/src/assets/banjir.jpg",
      status: "Menunggu",
      time: "6 mins ago",
      comments: [
        {
          id: 1,
          author: "Ahmad Ridwan",
          text: "Banjir di jalan ini memang sudah lama jadi masalah. Terima kasih sudah melaporkan, semoga segera ditangani!",
          date: "20 November 2025, 14:30",
          timestamp: 1700471400000,
        },
        {
          id: 2,
          author: "Siti Nurhaliza",
          text: "Setuju! Setiap hujan deras pasti banjir di area ini. Drainase perlu diperbaiki.",
          date: "20 November 2025, 15:45",
          timestamp: 1700475900000,
        },
      ],
      category: "Banjir",
      link: "#",
    },
    {
      id: 2,
      title: "Pohon Tumbang di Taman Kota",
      desc: "Pohon besar tumbang dan menutup jalur pejalan kaki.",
      location: "Jl. Taman Raya, Balikpapan",
      date: "13 November 2025",
      img: "/src/assets/banjir.jpg",
      status: "Selesai",
      time: "10 days ago",
      comments: [
        {
          id: 1,
          author: "Budi Santoso",
          text: "Alhamdulillah sudah dibersihkan. Terima kasih Dinas Lingkungan Hidup yang cepat tanggap!",
          date: "16 November 2025, 09:15",
          timestamp: 1700119500000,
        },
        {
          id: 2,
          author: "Rina Wijaya",
          text: "Senang dengar ini sudah selesai. Taman sudah bisa digunakan lagi untuk olahraga pagi.",
          date: "16 November 2025, 10:20",
          timestamp: 1700123400000,
        },
        {
          id: 3,
          author: "Agus Pratama",
          text: "Keren! Ini bukti pemerintah peduli dengan laporan warga. Semoga makin banyak yang melapor.",
          date: "17 November 2025, 08:00",
          timestamp: 1700201200000,
        },
      ],
      category: "Lingkungan",
      link: "#",
    },
    {
      id: 3,
      title: "Longsor di Perbukitan",
      desc: "Longsor kecil menghalangi akses jalan pedesaan.",
      location: "Jl. Perbukitan Indah, Balikpapan Utara",
      date: "22 November 2025",
      img: "/src/assets/banjir.jpg",
      status: "Proses",
      time: "16 hours ago",
      comments: [
        {
          id: 1,
          author: "Hendra Kusuma",
          text: "Warga sekitar juga kesulitan akses. Semoga tim BPBD segera turun ke lokasi.",
          date: "22 November 2025, 11:00",
          timestamp: 1700644800000,
        },
        {
          id: 2,
          author: "Ibu Mariam",
          text: "Anak-anak sekolah jadi harus putar jalan jauh. Mohon segera ditangani ya.",
          date: "22 November 2025, 13:30",
          timestamp: 1700653800000,
        },
      ],
      category: "Bencana",
      link: "#",
    },
  ],

  addReport(report) {
    const newReport = {
      id: this.reports.length + 1,
      ...report,
      status: "Menunggu",
      time: "Baru saja",
      comments: [],
      link: "#",
    };
    this.reports.unshift(newReport);
  },

  getReportById(id) {
    return this.reports.find((r) => r.id === parseInt(id));
  },

  addComment(reportId, comment) {
    const report = this.getReportById(reportId);
    if (report) {
      const newComment = {
        id: report.comments.length + 1,
        author: comment.author || "Anonymous",
        text: comment.text,
        date: new Date().toLocaleString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        timestamp: Date.now(),
      };
      report.comments.push(newComment);
    }
  },
});
