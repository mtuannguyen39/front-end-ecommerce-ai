export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Khóa học TOEIC online",
    price: 1200000,
    image: "/images/toeic-online.webp",
    description: "Khóa học TOEIC online, đảm bảo đạt được 700+",
  },
  {
    id: 2,
    name: "Khóa học IELTS online",
    price: 900000,
    image: "/images/ielts-online.jpg",
    description:
      "Khóa học IELTS online, gồm 4 kỹ năng: Đọc, viết, nói, nghe. Đảm bảo được 7.0+",
  },
  {
    id: 3,
    name: "Khóa học Tiếng anh giao tiếp cơ bản online",
    price: 250000,
    image: "/images/tieng-anh-giao-tiep-co-ban.webp",
    description:
      "Khóa học tiếng anh giao tiếp cơ bản, được giao tiếp với người bản địa trong suốt khóa học. Chắc chắn sẽ giao tiếp được và thuần thục tiếng anh sau khi học khóa này.",
  },
  {
    id: 4,
    name: "Khóa học Tiếng anh lớp 12 online",
    price: 500000,
    image: "/images/khoa-hoc-tieng-anh-online.png",
    description:
      "Khóa học tiếng anh lớp 12 dành cho học sinh mất gốc tiếng anh, kèm theo đó có luyện đề thi đại học.",
  },
];
