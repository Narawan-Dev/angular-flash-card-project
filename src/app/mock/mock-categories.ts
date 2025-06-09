import { FlashCardCategory } from "../models/flash-card-category.model";

export const mockCategories: FlashCardCategory[] = [
  {
    categoryName: "ร่างกาย",
    cards: [
      { frontTitle: "ตา", backTitle: "eye", backImage: "assets/images/eye.png", description: "อาย" },
      { frontTitle: "มือ", backTitle: "hand", backImage: "assets/images/hand.png", description: "แฮนด์" },
      { frontTitle: "หัวใจ", backTitle: "heart", backImage: "assets/images/heart.png", description: "ฮาร์ท" },
      { frontTitle: "หู", backTitle: "ear", backImage: "assets/images/ear.png", description: "เอียร์" },
      { frontTitle: "จมูก", backTitle: "nose", backImage: "assets/images/nose.png", description: "โนส" },
      { frontTitle: "ปาก", backTitle: "mouth", backImage: "assets/images/mouth.png", description: "เมาธ์" },
      { frontTitle: "เท้า", backTitle: "foot", backImage: "assets/images/foot.png", description: "ฟุต" },
      { frontTitle: "ขา", backTitle: "leg", backImage: "assets/images/leg.png", description: "เลก" },
      { frontTitle: "แขน", backTitle: "arm", backImage: "assets/images/arm.png", description: "อาร์ม" },
      { frontTitle: "นิ้ว", backTitle: "finger", backImage: "assets/images/finger.png", description: "ฟิงเกอะ" }
    ]
  },
  {
    categoryName: "ของใช้ในครัว",
    cards: [
      { frontTitle: "กระทะ", backTitle: "pan", backImage: "assets/images/pan.png", description: "แพน" },
      { frontTitle: "ช้อน", backTitle: "spoon", backImage: "assets/images/spoon.png", description: "สปูน" },
      { frontTitle: "มีด", backTitle: "knife", backImage: "assets/images/knife.png", description: "ไนฟ์" },
      { frontTitle: "ส้อม", backTitle: "fork", backImage: "assets/images/fork.png", description: "ฟอร์ค" },
      { frontTitle: "ถ้วย", backTitle: "bowl", backImage: "assets/images/bowl.png", description: "โบล" },
      { frontTitle: "จาน", backTitle: "plate", backImage: "assets/images/plate.png", description: "เพลท" },
      { frontTitle: "แก้วน้ำ", backTitle: "glass", backImage: "assets/images/glass.png", description: "กลาส" },
      { frontTitle: "หม้อ", backTitle: "pot", backImage: "assets/images/pot.png", description: "พ็อท" },
      { frontTitle: "เตาแก๊ส", backTitle: "stove", backImage: "assets/images/stove.png", description: "สโตฟ" },
      { frontTitle: "ตู้เย็น", backTitle: "refrigerator", backImage: "assets/images/refrigerator.png", description: "รีฟริจเจอเรเทอะ" }
    ]
  },
  {
    categoryName: "สัตว์",
    cards: [
      { frontTitle: "แมว", backTitle: "cat", backImage: "assets/images/cat.png", description: "แคท" },
      { frontTitle: "หมา", backTitle: "dog", backImage: "assets/images/dog.png", description: "ด็อก" },
      { frontTitle: "นก", backTitle: "bird", backImage: "assets/images/bird.png", description: "เบิร์ด" },
      { frontTitle: "ปลา", backTitle: "fish", backImage: "assets/images/fish.png", description: "ฟิช" },
      { frontTitle: "ม้า", backTitle: "horse", backImage: "assets/images/horse.png", description: "ฮอร์ส" },
      { frontTitle: "วัว", backTitle: "cow", backImage: "assets/images/cow.png", description: "คาว" },
      { frontTitle: "หมู", backTitle: "pig", backImage: "assets/images/pig.png", description: "พิก" },
      { frontTitle: "กระต่าย", backTitle: "rabbit", backImage: "assets/images/rabbit.png", description: "แรบบิท" },
      { frontTitle: "ไก่", backTitle: "chicken", backImage: "assets/images/chicken.png", description: "ชิคเคิน" },
      { frontTitle: "หมี", backTitle: "bear", backImage: "assets/images/bear.png", description: "แบร์" }
    ]
  },
  {
    categoryName: "ผลไม้",
    cards: [
      { frontTitle: "แอปเปิ้ล", backTitle: "apple", backImage: "assets/images/apple.png", description: "แอพเพิล" },
      { frontTitle: "กล้วย", backTitle: "banana", backImage: "assets/images/banana.png", description: "บะนานา" },
      { frontTitle: "ส้ม", backTitle: "orange", backImage: "assets/images/orange.png", description: "ออเรนจ์" },
      { frontTitle: "แตงโม", backTitle: "watermelon", backImage: "assets/images/watermelon.png", description: "วอเทอะเมลอน" },
      { frontTitle: "องุ่น", backTitle: "grape", backImage: "assets/images/grape.png", description: "เกรพ" },
      { frontTitle: "มะม่วง", backTitle: "mango", backImage: "assets/images/mango.png", description: "แมงโก้" },
      { frontTitle: "สตรอว์เบอร์รี", backTitle: "strawberry", backImage: "assets/images/strawberry.png", description: "สตรอเบอรี" },
      { frontTitle: "กีวี", backTitle: "kiwi", backImage: "assets/images/kiwi.png", description: "คีวี" },
      { frontTitle: "มะละกอ", backTitle: "papaya", backImage: "assets/images/papaya.png", description: "พะพายา" },
      { frontTitle: "มะพร้าว", backTitle: "coconut", backImage: "assets/images/coconut.png", description: "โคโคนัท" }
    ]
  }
];
