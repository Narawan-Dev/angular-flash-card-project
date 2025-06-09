import { FlashCardCategory } from "../models/flash-card-category.model";

export const mockCategories: FlashCardCategory[] = [
  {
    frontCategoryName: "body",
    backCategoryName: "ร่างกาย",
    cards: [
      { frontTitle: "eye", frontDescription: "อาย", backTitle: "ตา", backDescription: null, backImage: "assets/images/eye.png" },
      { frontTitle: "hand", frontDescription: "แฮนด์", backTitle: "มือ", backDescription: null, backImage: "assets/images/hand.png" },
      { frontTitle: "heart", frontDescription: "ฮาร์ท", backTitle: "หัวใจ", backDescription: null, backImage: "assets/images/heart.png" },
      { frontTitle: "ear", frontDescription: "เอียร์", backTitle: "หู", backDescription: null, backImage: "assets/images/ear.png" },
      { frontTitle: "nose", frontDescription: "โนส", backTitle: "จมูก", backDescription: null, backImage: "assets/images/nose.png" },
      { frontTitle: "mouth", frontDescription: "เมาธ์", backTitle: "ปาก", backDescription: null, backImage: "assets/images/mouth.png" },
      { frontTitle: "foot", frontDescription: "ฟุต", backTitle: "เท้า", backDescription: null, backImage: "assets/images/foot.png" },
      { frontTitle: "leg", frontDescription: "เลก", backTitle: "ขา", backDescription: null, backImage: "assets/images/leg.png" },
      { frontTitle: "arm", frontDescription: "อาร์ม", backTitle: "แขน", backDescription: null, backImage: "assets/images/arm.png" },
      { frontTitle: "finger", frontDescription: "ฟิงเกอะ", backTitle: "นิ้ว", backDescription: null, backImage: "assets/images/finger.png" }
    ]
  },
  {
    frontCategoryName: "kitchen items",
    backCategoryName: "ของใช้ในครัว",
    cards: [
      { frontTitle: "pan", frontDescription: "แพน", backTitle: "กระทะ", backDescription: null, backImage: "assets/images/pan.png" },
      { frontTitle: "spoon", frontDescription: "สปูน", backTitle: "ช้อน", backDescription: null, backImage: "assets/images/spoon.png" },
      { frontTitle: "knife", frontDescription: "ไนฟ์", backTitle: "มีด", backDescription: null, backImage: "assets/images/knife.png" },
      { frontTitle: "fork", frontDescription: "ฟอร์ค", backTitle: "ส้อม", backDescription: null, backImage: "assets/images/fork.png" },
      { frontTitle: "bowl", frontDescription: "โบล", backTitle: "ถ้วย", backDescription: null, backImage: "assets/images/bowl.png" },
      { frontTitle: "plate", frontDescription: "เพลท", backTitle: "จาน", backDescription: null, backImage: "assets/images/plate.png" },
      { frontTitle: "glass", frontDescription: "กลาส", backTitle: "แก้วน้ำ", backDescription: null, backImage: "assets/images/glass.png" },
      { frontTitle: "pot", frontDescription: "พ็อท", backTitle: "หม้อ", backDescription: null, backImage: "assets/images/pot.png" },
      { frontTitle: "stove", frontDescription: "สโตฟ", backTitle: "เตาแก๊ส", backDescription: null, backImage: "assets/images/stove.png" },
      { frontTitle: "refrigerator", frontDescription: "รีฟริจเจอเรเทอะ", backTitle: "ตู้เย็น", backDescription: null, backImage: "assets/images/refrigerator.png" }
    ]
  },
  {
    frontCategoryName: "animals",
    backCategoryName: "สัตว์",
    cards: [
      { frontTitle: "cat", frontDescription: "แคท", backTitle: "แมว", backDescription: null, backImage: "assets/images/cat.png" },
      { frontTitle: "dog", frontDescription: "ด็อก", backTitle: "หมา", backDescription: null, backImage: "assets/images/dog.png" },
      { frontTitle: "bird", frontDescription: "เบิร์ด", backTitle: "นก", backDescription: null, backImage: "assets/images/bird.png" },
      { frontTitle: "fish", frontDescription: "ฟิช", backTitle: "ปลา", backDescription: null, backImage: "assets/images/fish.png" },
      { frontTitle: "horse", frontDescription: "ฮอร์ส", backTitle: "ม้า", backDescription: null, backImage: "assets/images/horse.png" },
      { frontTitle: "cow", frontDescription: "คาว", backTitle: "วัว", backDescription: null, backImage: "assets/images/cow.png" },
      { frontTitle: "pig", frontDescription: "พิก", backTitle: "หมู", backDescription: null, backImage: "assets/images/pig.png" },
      { frontTitle: "rabbit", frontDescription: "แรบบิท", backTitle: "กระต่าย", backDescription: null, backImage: "assets/images/rabbit.png" },
      { frontTitle: "chicken", frontDescription: "ชิคเคิน", backTitle: "ไก่", backDescription: null, backImage: "assets/images/chicken.png" },
      { frontTitle: "bear", frontDescription: "แบร์", backTitle: "หมี", backDescription: null, backImage: "assets/images/bear.png" }
    ]
  },
  {
    frontCategoryName: "fruits",
    backCategoryName: "ผลไม้",
    cards: [
      { frontTitle: "apple", frontDescription: "แอพเพิล", backTitle: "แอปเปิ้ล", backDescription: null, backImage: "assets/images/apple.png" },
      { frontTitle: "banana", frontDescription: "บะนานา", backTitle: "กล้วย", backDescription: null, backImage: "assets/images/banana.png" },
      { frontTitle: "orange", frontDescription: "ออเรนจ์", backTitle: "ส้ม", backDescription: null, backImage: "assets/images/orange.png" },
      { frontTitle: "watermelon", frontDescription: "วอเทอะเมลอน", backTitle: "แตงโม", backDescription: null, backImage: "assets/images/watermelon.png" },
      { frontTitle: "grape", frontDescription: "เกรพ", backTitle: "องุ่น", backDescription: null, backImage: "assets/images/grape.png" },
      { frontTitle: "mango", frontDescription: "แมงโก้", backTitle: "มะม่วง", backDescription: null, backImage: "assets/images/mango.png" },
      { frontTitle: "strawberry", frontDescription: "สตรอเบอรี", backTitle: "สตรอว์เบอร์รี", backDescription: null, backImage: "assets/images/strawberry.png" },
      { frontTitle: "kiwi", frontDescription: "คีวี", backTitle: "กีวี", backDescription: null, backImage: "assets/images/kiwi.png" },
      { frontTitle: "papaya", frontDescription: "พะพายา", backTitle: "มะละกอ", backDescription: null, backImage: "assets/images/papaya.png" },
      { frontTitle: "coconut", frontDescription: "โคโคนัท", backTitle: "มะพร้าว", backDescription: null, backImage: "assets/images/coconut.png" }
    ]
  }
];