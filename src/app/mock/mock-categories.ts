import { FlashCardCategory } from "../models/flash-card-category.model";

export const mockCategories: FlashCardCategory[] = [
  {
    categoryName: "ร่างกาย",
    cards: [
      { frontTitle: "ตา", backTitle: "eye", backImage: "assets/images/eye.png" },
      { frontTitle: "มือ", backTitle: "hand", backImage: "assets/images/hand.png" },
      { frontTitle: "หัวใจ", backTitle: "heart", backImage: "assets/images/heart.png" },
      { frontTitle: "หู", backTitle: "ear", backImage: "assets/images/ear.png" },
      { frontTitle: "จมูก", backTitle: "nose", backImage: "assets/images/nose.png" },
      { frontTitle: "ปาก", backTitle: "mouth", backImage: "assets/images/mouth.png" },
      { frontTitle: "เท้า", backTitle: "foot", backImage: "assets/images/foot.png" },
      { frontTitle: "ขา", backTitle: "leg", backImage: "assets/images/leg.png" },
      { frontTitle: "แขน", backTitle: "arm", backImage: "assets/images/arm.png" },
      { frontTitle: "นิ้ว", backTitle: "finger", backImage: "assets/images/finger.png" }
    ]
  },
  {
    categoryName: "ของใช้ในครัว",
    cards: [
      { frontTitle: "กระทะ", backTitle: "pan", backImage: "assets/images/pan.png" },
      { frontTitle: "ช้อน", backTitle: "spoon", backImage: "assets/images/spoon.png" },
      { frontTitle: "มีด", backTitle: "knife", backImage: "assets/images/knife.png" },
      { frontTitle: "ส้อม", backTitle: "fork", backImage: "assets/images/fork.png" },
      { frontTitle: "ถ้วย", backTitle: "bowl", backImage: "assets/images/bowl.png" },
      { frontTitle: "จาน", backTitle: "plate", backImage: "assets/images/plate.png" },
      { frontTitle: "แก้วน้ำ", backTitle: "glass", backImage: "assets/images/glass.png" },
      { frontTitle: "หม้อ", backTitle: "pot", backImage: "assets/images/pot.png" },
      { frontTitle: "เตาแก๊ส", backTitle: "stove", backImage: "assets/images/stove.png" },
      { frontTitle: "ตู้เย็น", backTitle: "refrigerator", backImage: "assets/images/refrigerator.png" }
    ]
  },
  {
    categoryName: "สัตว์",
    cards: [
      { frontTitle: "แมว", backTitle: "cat", backImage: "assets/images/cat.png" },
      { frontTitle: "หมา", backTitle: "dog", backImage: "assets/images/dog.png" },
      { frontTitle: "นก", backTitle: "bird", backImage: "assets/images/bird.png" },
      { frontTitle: "ปลา", backTitle: "fish", backImage: "assets/images/fish.png" },
      { frontTitle: "ม้า", backTitle: "horse", backImage: "assets/images/horse.png" },
      { frontTitle: "วัว", backTitle: "cow", backImage: "assets/images/cow.png" },
      { frontTitle: "หมู", backTitle: "pig", backImage: "assets/images/pig.png" },
      { frontTitle: "กระต่าย", backTitle: "rabbit", backImage: "assets/images/rabbit.png" },
      { frontTitle: "ไก่", backTitle: "chicken", backImage: "assets/images/chicken.png" },
      { frontTitle: "หมี", backTitle: "bear", backImage: "assets/images/bear.png" }
    ]
  },
  {
    categoryName: "ผลไม้",
    cards: [
      { frontTitle: "แอปเปิ้ล", backTitle: "apple", backImage: "assets/images/apple.png" },
      { frontTitle: "กล้วย", backTitle: "banana", backImage: "assets/images/banana.png" },
      { frontTitle: "ส้ม", backTitle: "orange", backImage: "assets/images/orange.png" },
      { frontTitle: "แตงโม", backTitle: "watermelon", backImage: "assets/images/watermelon.png" },
      { frontTitle: "องุ่น", backTitle: "grape", backImage: "assets/images/grape.png" },
      { frontTitle: "มะม่วง", backTitle: "mango", backImage: "assets/images/mango.png" },
      { frontTitle: "สตรอว์เบอร์รี", backTitle: "strawberry", backImage: "assets/images/strawberry.png" },
      { frontTitle: "กีวี", backTitle: "kiwi", backImage: "assets/images/kiwi.png" },
      { frontTitle: "มะละกอ", backTitle: "papaya", backImage: "assets/images/papaya.png" },
      { frontTitle: "มะพร้าว", backTitle: "coconut", backImage: "assets/images/coconut.png" }
    ]
  }
];
