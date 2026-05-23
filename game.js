// ================================================================
// game.js — Quiz Database + Game Engine
// K.O. QUIZZ: Tekken Battle Arena
// ================================================================
 
const stagesDatabase = {
            // STAGE 01: Coding (1A, 1B)
            "1A": [
                { q: "โครงสร้างหลักหรือโครงร่างเนื้อหาของเว็บเพจสร้างขึ้นโดยใช้เทคโนโลยีใดเป็นหลัก?", c: ["HTML", "CSS", "SQL", "DNS"], a: 0 },
                { q: "ถ้าหากต้องการเชื่อมโยงไฟล์สไตล์ชีทภายนอกมาใช้งานใน HTML จะต้องใช้แท็กใด?", c: ["<style>", "<link>", "<script>", "<meta>"], a: 1 },
                { q: "คำสั่ง CSS ในข้อใดใช้สำหรับจัดการระยะห่างบริเวณรอบนอกของกล่องอิลิเมนต์ (Outer space)?", c: ["padding", "border", "margin", "spacing"], a: 2 },
                { q: "สัญลักษณ์ระบุคลาส (Class Selector) ในภาษา CSS จะต้องขึ้นต้นด้วยเครื่องหมายใด?", c: ["# (Hashtag)", ". (Dot)", "$ (Dollar)", "@ (At)"], a: 1 },
                { q: "แท็ก HTML ใดใช้ในการทำตัวอักษรหนา (Bold Text) ตามมาตรฐานดั้งเดิม?", c: ["<em>", "<ins>", "<strong>", "<mark>"], a: 2 }
            ],
            "1B": [
                { q: "ในภาษา JavaScript คำสั่งใดต่อไปนี้ใช้ระบุการประกาศตัวแปรที่ไม่สามารถเปลี่ยนแปลงค่าใหม่ได้ (Block-scoped immutable)?", c: ["var", "let", "const", "def"], a: 2 },
                { q: "สัญลักษณ์ตัวดำเนินการในข้อใดของ JavaScript ใช้ในการเปรียบเทียบทั้งค่าและชนิดข้อมูลว่าตรงกัน?", c: ["==", "===", "=", "!="], a: 1 },
                { q: "ในภาษา Python ฟังก์ชันใดใช้ในการแสดงผลลัพธ์ออกทางจอภาพ?", c: ["echo()", "console.log()", "print()", "write()"], a: 2 },
                { q: "ชนิดข้อมูลประเภทใดที่มีผลลัพธ์ได้เพียงค่าเดียวระหว่าง จริง (True) หรือ เท็จ (False)?", c: ["Boolean", "String", "Null", "Float"], a: 0 },
                { q: "ในภาษา JavaScript ดัชนีตัวแรกของข้อมูลประเภทอาร์เรย์ (Array Index) เริ่มต้นด้วยตัวเลขใด?", c: ["-1", "0", "1", "2"], a: 1 }
            ],
 
            // STAGE 02: Thai History (2A, 2B)
            "2A": [
                { q: "ใครเป็นปฐมกษัตริย์ผู้รวบรวมอาณาจักรและสถาปนากรุงสุโขทัยเป็นราชธานี?", c: ["พ่อขุนศรีอินทราทิตย์", "พ่อขุนรามคำแหง", "สมเด็จพระนเรศวรมหาราช", "พระมหาธรรมราชาที่ 1"], a: 0 },
                { q: "พระมหากษัตริย์ไทยพระองค์ใดที่ทรงประดิษฐ์อักษรไทยขึ้นเป็นครั้งแรก?", c: ["สมเด็จพระนารายณ์มหาราช", "พ่อขุนรามคำแหงมหาราช", "สมเด็จพระเจ้าตากสินมหาราช", "สมเด็จพระบรมไตรโลกนาถ"], a: 1 },
                { q: "กรุงศรีอยุธยาได้รับการสถาปนาขึ้นเป็นราชธานีโดยกษัตริย์พระองค์ใด?", c: ["สมเด็จพระรามาธิบดีที่ 1 (อู่ทอง)", "สมเด็จพระเจ้าปราสาททอง", "สมเด็จพระบรมราชาธิบดีที่ 1", "พระมหาจักรพรรดิ"], a: 0 },
                { q: "กษัตริย์อยุธยาท่านใดได้รับการขนานนามในการกอบกู้อิสรภาพครั้งแรก และมีวีรกรรมหลั่งน้ำทักษิโณทก?", c: ["สมเด็จพระเจ้าตากสินมหาราช", "สมเด็จพระนเรศวรมหาราช", "สมเด็จพระเอกาทศรถ", "พระสุพรรณกัลยา"], a: 1 },
                { q: "ยุคทองของวรรณคดีในสมัยอยุธยา โดยเฉพาะการแต่งจินดามณี เกิดขึ้นในรัชสมัยกษัตริย์ท่านใด?", c: ["สมเด็จพระเจ้าอยู่หัวบรมโกศ", "สมเด็จพระนารายณ์มหาราช", "สมเด็จพระเพทราชา", "สมเด็จพระศรีสุริโยทัย"], a: 1 }
            ],
            "2B": [
                { q: "ผู้ทรงสถาปนากรุงรัตนโกสินทร์และทรงครองสิริราชสมบัติเป็นรัชกาลที่ 1 คือพระองค์ใด?", c: ["พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช", "พระบาทสมเด็จพระพุทธเลิศหล้านภาลัย", "พระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว", "พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว"], a: 0 },
                { q: "สนธิสัญญาทางการค้าข้อใดที่ไทยทำขึ้นกับอังกฤษในรัชสมัยของรัชกาลที่ 4?", c: ["สนธิสัญญาเบอร์นี", "สนธิสัญญาเบาว์ริง", "สนธิสัญญาโตเกียว", "สนธิสัญญากรุงเทพฯ"], a: 1 },
                { q: "การเลิกทาสและการปฏิรูประบบบริหารราชการแผ่นดินไทยครั้งใหญ่ เกิดขึ้นในรัชกาลใด?", c: ["รัชกาลที่ 3", "รัชกาลที่ 4", "รัชกาลที่ 5", "รัชกาลที่ 6"], a: 2 },
                { q: "ประเทศไทยเปลี่ยนระบอบการปกครองมาเป็นระบอบประชาธิปไตยในปี พ.ศ. ใด?", c: ["พ.ศ. 2475", "พ.ศ. 2482", "พ.ศ. 2500", "พ.ศ. 2516"], a: 0 },
                { q: "พระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว (รัชกาลที่ 6) ทรงริเริ่มสร้างเมืองจำลองประชาธิปไตยใด?", c: ["ดุสิตธานี", "ประชานิเวศน์", "สยามสแควร์", "สุโขทัยแลนด์"], a: 0 }
            ],
 
            // STAGE 03: Computer Laws (3A, 3B)
            "3A": [
                { q: "พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ฉบับแรกของไทยประกาศใช้เมื่อปี พ.ศ. ใด?", c: ["พ.ศ. 2545", "พ.ศ. 2550", "พ.ศ. 2560", "พ.ศ. 2562"], a: 1 },
                { q: "การเข้าถึงระบบคอมพิวเตอร์หรือข้อมูลคอมพิวเตอร์ของผู้อื่นโดยมิชอบ มีโทษอย่างไรตาม พ.ร.บ. คอมพิวเตอร์?", c: ["โทษปรับอย่างเดียว", "จำคุกอย่างเดียว", "ทั้งจำและปรับ", "ไม่มีความผิด"], a: 2 },
                { q: "การส่งข้อมูลคอมพิวเตอร์หรืออีเมลก่อกวนจนทำให้ผู้รับเดือดร้อนรำคาญ (Spam) โดยไม่เปิดโอกาสให้ปฏิเสธ จัดเป็นความผิดตาม พ.ร.บ. ข้อใด?", c: ["มาตรา 11 (ส่งสแปม)", "มาตรา 14 (ข้อมูลเท็จ)", "มาตรา 16 (ตัดต่อภาพ)", "มาตรา 20 (บล็อกเว็บ)"], a: 0 },
                { q: "การตัดต่อรูปภาพของผู้อื่นนำไปเผยแพร่ออนไลน์จนทำให้เขาเสียชื่อเสียง ถูกดูหมิ่นเกลียดชัง มีโทษทางกฎหมายอย่างไร?", c: ["โทษปรับสูงสุด 5,000 บาท", "จำคุกไม่เกิน 3 ปี หรือปรับไม่เกิน 200,000 บาท", "จำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท", "ไม่มีความผิดหากทำเพื่อความสนุก"], a: 1 },
                { q: "ผู้ใดที่โพสต์ข้อมูลคอมพิวเตอร์อันเป็นเท็จ กระทบต่อความมั่นคงของประเทศหรือสร้างความตื่นตระหนก มีความผิดตามมาตราใด?", c: ["มาตรา 5", "มาตรา 9", "มาตรา 12", "มาตรา 14"], a: 3 }
            ],
            "3B": [
                { q: "กฎหมายคุ้มครองข้อมูลส่วนบุคคลของประเทศไทย มีชื่อย่อภาษาอังกฤษว่าอะไร?", c: ["GDPR", "PDPA", "CCPA", "HIPAA"], a: 1 },
                { q: "ข้อมูลใดต่อไปนี้จัดเป็น 'ข้อมูลส่วนบุคคลอ่อนไหว' (Sensitive Personal Data) ซึ่งต้องได้รับการคุ้มครองเป็นพิเศษ?", c: ["ชื่อ-นามสกุล", "หมายเลขโทรศัพท์", "ความเชื่อทางศาสนา", "อีเมล"], a: 2 },
                { q: "ผู้ใดแอบนำลิขสิทธิ์ซอฟต์แวร์ผู้อื่นไปจำหน่ายต่อเชิงพาณิชย์โดยไม่ได้รับอนุญาต ถือเป็นการละเมิดลิขสิทธิ์ตาม พ.ร.บ. ลิขสิทธิ์ อย่างไร?", c: ["ละเมิดขั้นต้น", "ละเมิดขั้นรอง", "การใช้งานที่เป็นธรรม (Fair Use)", "ไม่มีข้อถูก"], a: 0 },
                { q: "ข้อใดถือเป็นสิทธิที่ได้รับการคุ้มครองทันทีที่สร้างสรรค์ผลงานขึ้นมา โดยไม่ต้องจดทะเบียนตามกฎหมายไทย?", c: ["สิทธิบัตร", "เครื่องหมายการค้า", "ลิขสิทธิ์", "ความลับทางการค้า"], a: 2 },
                { q: "ภายใต้กฎหมาย PDPA หากองค์กรทำข้อมูลลูกค้ารั่วไหลและไม่ได้แจ้งคณะกรรมการภายในเวลาที่กำหนด มีโทษปรับสูงสุดเท่าใด?", c: ["ปรับสูงสุด 5 แสนบาท", "ปรับสูงสุด 1 ล้านบาท", "ปรับสูงสุด 3 ล้านบาท", "ปรับสูงสุด 5 ล้านบาท"], a: 3 }
            ],
 
            // STAGE 04: Science (4A, 4B)
            "4A": [
                { q: "แก๊สประเภทใดที่มีสัดส่วนปริมาณมากที่สุดในบรรยากาศของโลก?", c: ["แก๊สออกซิเจน", "แก๊สไนโตรเจน", "แก๊สคาร์บอนไดออกไซด์", "แก๊สไฮโดรเจน"], a: 1 },
                { q: "สถานะใดต่อไปนี้ที่มีพลังงานและความร้อนสูงที่สุด จนประจุหลุดออกจากอะตอม?", c: ["ของแข็ง", "ของเหลว", "แก๊ส", "พลาสม่า"], a: 3 },
                { q: "น้ำมีสูตรเคมีว่า H2O หมายความว่ามีส่วนประกอบของอะตอมใดบ้าง?", c: ["แก๊สไฮโดรเจน 1 และออกซิเจน 2", "แก๊สไฮโดรเจน 2 และออกซิเจน 1", "แก๊สเฮเลียม 2 และออกซิเจน 1", "แก๊สไฮโดรเจน 2 และออกไซด์ 2"], a: 1 },
                { q: "แรงที่ดึงดูดวัตถุเข้าสู่ศูนย์กลางของโลกเรียกว่าอะไร และใครเป็นผู้ค้นพบทฤษฎีนี้?", c: ["แรงต้าน / อัลเบิร์ต ไอน์สไตน์", "แรงโน้มถ่วง / เซอร์ ไอแซก นิวตัน", "แรงแม่เหล็ก / นิโคลา เทสลา", "แรงเหวี่ยง / กาลิเลโอ กาลิเลอี"], a: 1 },
                { q: "โลหะชนิดใดที่เป็นของเหลวที่อุณหภูมิห้องปกติ และมักใช้ในเครื่องวัดอุณหภูมิ (Thermometer)?", c: ["ทองแดง", "ปรอท", "เหล็ก", "ตะกั่ว"], a: 1 }
            ],
            "4B": [
                { q: "ดาวเคราะห์ดวงใดในระบบสุริยะที่ได้ชื่อว่าเป็น 'ดาวเคราะห์แดง' เนื่องจากมีเหล็กออกไซด์บนพื้นผิวมาก?", c: ["ดาวศุกร์", "ดาวอังคาร", "ดาวพฤหัสบดี", "ดาวเสาร์"], a: 1 },
                { q: "เซลล์ประเภทใดในร่างกายมนุษย์ที่ทำหน้าที่หลักในการลำเลียงออกซิเจนไปยังส่วนต่างๆ?", c: ["เซลล์เม็ดเลือดขาว", "เซลล์เม็ดเลือดแดง", "เกล็ดเลือด", "เซลล์ประสาท"], a: 1 },
                { q: "กระบวนการใดที่พืชสีเขียวใช้แสงแดด คาร์บอนไดออกไซด์ และน้ำ เพื่อสร้างอาหารเอง?", c: ["การหายใจระดับเซลล์", "การสังเคราะห์ด้วยแสง", "การดูดซึมอาหาร", "การคายน้ำ"], a: 1 },
                { q: "ดาวเคราะห์ดวงใดมีขนาดใหญ่ที่สุดในระบบสุริยะจักรวาลของเรา?", c: ["ดาวเสาร์", "ดาวอังคาร", "ดาวเนปจูน", "ดาวพฤหัสบดี"], a: 3 },
                { q: "อวัยวะใดในร่างกายมนุษย์ที่มีขนาดใหญ่ที่สุด?", c: ["ตับ", "สมอง", "ผิวหนัง", "ปอด"], a: 2 }
            ],
 
            // STAGE 05: Mathematics (5A, 5B)
            "5A": [
                { q: "ค่าของ X ในสมการต่อไปนี้คืออะไร: 3X + 7 = 22?", c: ["3", "4", "5", "6"], a: 2 },
                { q: "สูตรในการคำนวณหาพื้นที่ของรูปสามเหลี่ยมใดๆ คือข้อใด?", c: ["ฐาน x สูง", "1/2 x ฐาน x สูง", "กว้าง x ยาว", "พาย x รัศมีกำลังสอง"], a: 1 },
                { q: "ทฤษฎีบทพีทาโกรัสสำหรับรูปสามเหลี่ยมมุมฉาก มีสมการความสัมพันธ์อย่างไร?", c: ["a + b = c", "a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a x b = c"], a: 1 },
                { q: "จำนวนเฉพาะ (Prime Number) ตัวแรกและเป็นจำนวนคู่เพียงตัวเดียวในระบบตัวเลขคือข้อใด?", c: ["1", "2", "3", "4"], a: 1 },
                { q: "ถ้าหากนำ 0 ไปหารจำนวนจริงใดๆ ผลลัพธ์ทางคณิตศาสตร์จะออกมาอย่างไร?", c: ["ได้ 0", "ได้ 1", "ไม่นิยามทางคณิตศาสตร์", "ได้ค่าอินฟินิตี้ทันที"], a: 2 }
            ],
            "5B": [
                { q: "ถ้าโยนเหรียญที่เที่ยงตรง 2 เหรียญพร้อมกัน โอกาสที่จะออก 'หัว' ทั้งคู่เป็นเท่าใด?", c: ["1/2", "1/4", "1/8", "3/4"], a: 1 },
                { q: "ค่าของมุมในข้อใดคือผลบวกมุมภายในทั้งหมดของรูปสี่เหลี่ยมใดๆ?", c: ["180 องศา", "270 องศา", "360 องศา", "540 องศา"], a: 2 },
                { q: "เลขฐานสอง (Binary) ที่มีค่าเท่ากับเลข 10 ในระบบเลขฐานสิบคือข้อใด?", c: ["1001", "1010", "1100", "1111"], a: 1 },
                { q: "ลำดับฟีโบนัชชีถัดไปจาก 0, 1, 1, 2, 3, 5, 8 คือจำนวนใด?", c: ["11", "12", "13", "15"], a: 2 },
                { q: "ในวิชาสถิติ ค่าเฉลี่ยที่ได้จากการนำข้อมูลทุกตัวมาบวกกันแล้วหารด้วยจำนวนข้อมูลทั้งหมด เรียกว่าอะไร?", c: ["ฐานนิยม (Mode)", "มัธยฐาน (Median)", "ค่าเฉลี่ยเลขคณิต (Mean)", "ส่วนเบี่ยงเบนมาตรฐาน"], a: 2 }
            ],
 
            // STAGE 06: Mythology (6A, 6B)
            "6A": [
                { q: "เทพเจ้าสูงสุดของกรีกโบราณผู้ปกครองสวรรค์ ณ เขาโอลิมปัส และมีอสุนีบาตเป็นอาวุธคือใคร?", c: ["โพไซดอน", "ฮาเดส", "ซุส (Zeus)", "อะพอลโล"], a: 2 },
                { q: "ในตำนานเทพนอร์ส (Norse) เทพเจ้าแห่งสายฟ้าผู้ถือค้อนโยลเนียร์ (Mjolnir) ชื่อว่าอะไร?", c: ["โอดิน", "โลกิ", "ธอร์ (Thor)", "บัลเดอร์"], a: 2 },
                { q: "เทพีแห่งความรักและความงามตามตำนานปกรณัมกรีกโบราณคือใคร?", c: ["อาธีน่า", "เฮรา", "อะโฟรไดที (Aphrodite)", "อาร์เทมิส"], a: 2 },
                { q: "สุนัขสามหัวผู้ทำหน้าที่เฝ้าประตูนรกขุมอเวจีของยมเทพฮาเดส มีชื่อเรียกว่าอะไร?", c: ["ฟิเนียส", "เซอร์เบอรัส (Cerberus)", "เปกาซัส", "ไฮดรา"], a: 1 },
                { q: "เทพเจ้ากรีกท่านใดที่เป็นผู้พิทักษ์แห่งมหาสมุทร มีอาวุธคู่กายคือสามง่าม (Trident)?", c: ["เฮอร์มีส", "แอรีส", "โพไซดอน (Poseidon)", "ไดโอนีซัส"], a: 2 }
            ],
            "6B": [
                { q: "เทพเจ้าแห่งความสำเร็จและผู้เป็นบรมครูแห่งศิลปวิทยาการตามตำนานพราหมณ์-ฮินดู คือเทพองค์ใด?", c: ["พระศิวะ", "พระวิษณุ", "พระพิฆเนศ", "พระอินทร์"], a: 2 },
                { q: "ตามตำนานอียิปต์โบราณ เทพเจ้าผู้มีเศียรเป็นสุนัขในและทำหน้าที่นำทางดวงวิญญาณไปสู่อีกภพคือใคร?", c: ["รา (Ra)", "โอซิริส (Osiris)", "อนูบิส (Anubis)", "ฮอรัส (Horus)"], a: 2 },
                { q: "วรรณคดีเรื่องรามเกียรติ์ ทศกัณฐ์มีพละกำลังมหาศาลและมีจำนวนเศียร (หัว) และกร (มือ) เท่าใด?", c: ["10 หน้า 20 มือ", "4 หน้า 8 มือ", "10 หน้า 10 มือ", "20 หน้า 40 มือ"], a: 0 },
                { q: "ตามความเชื่อปรัมปราของจีน สัตว์วิเศษชนิดใดที่เป็นตัวแทนของจักรพรรดิ พลังหยาง และความเจืองรุ่งเรือง?", c: ["กิเลน", "หงส์", "มังกร", "เต่าดำ"], a: 2 },
                { q: "นกฟีนิกซ์ (Phoenix) เป็นสัตว์ในตำนานที่มีความสามารถพิเศษอันโดดเด่นในเรื่องใดเมื่อสิ้นอายุขัย?", c: ["กลายร่างเป็นมนุษย์", "ฟื้นคืนชีพจากกองขี้เถ้าของตัวเอง", "พ่นไฟแช่แข็งศัตรู", "พยากรณ์อนาคตได้ล่วงหน้า"], a: 1 }
            ]
        };
 
        const subcategoryMeta = {
            1: {
                title: "1. เขียนโค้ดเบื้องต้น",
                badge: "BASIC CODING LORE",
                A: { title: "Web Dev Basics (HTML/CSS)", desc: "ปะทะความรู้พื้นฐานการออกแบบเว็บไซต์ด้วย HTML แท็กหลักและการดีไซน์ความสวยงามด้วย CSS", diff: "⭐⭐⭐" },
                B: { title: "Logic & Code (JS/Python)", desc: "เจาะลึกตรรกะ ตัวแปร โครงสร้างข้อมูล และการทำงานร่วมกันของอัลกอริทึมใน JS และ Python", diff: "⭐⭐⭐⭐" }
            },
            2: {
                title: "2. ประวัติศาสตร์ไทย",
                badge: "THAI HISTORY LEGENDS",
                A: { title: "สุโขทัยและอยุธยา", desc: "ย้อนกลับไปยุคปฐมบทราชธานีสุโขทัย สู่ศึกการสู้รบและความมั่งคั่ง 417 ปีของกรุงศรีอยุธยา", diff: "⭐⭐⭐" },
                B: { title: "กรุงรัตนโกสินทร์", desc: "ทำความเข้าใจยุคสร้างกรุงเทพฯ สนธิสัญญาเบาว์ริง การปฏิรูปการเลิกทาส และการก้าวสู่ประชาธิปไตย", diff: "⭐⭐⭐⭐" }
            },
            3: {
                title: "3. กฎหมายคอมพิวเตอร์",
                badge: "DIGITAL LAW & ETHICS",
                A: { title: "พ.ร.บ. คอมพิวเตอร์", desc: "เจาะรายละเอียดมาตราสำคัญของ พ.ร.บ. คอมพิวเตอร์ การแฮกข้อมูล ปล่อยข้อมูลเท็จ และโทษที่ควรรู้", diff: "⭐⭐⭐" },
                B: { title: "ลิขสิทธิ์ดิจิทัล & PDPA", desc: "ความเข้าใจเรื่องกฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) สิทธิ์ความเป็นส่วนตัว และสิทธิบัตรงานสร้างสรรค์", diff: "⭐⭐⭐⭐" }
            },
            4: {
                title: "4. วิทยาศาสตร์",
                badge: "WORLD SCIENCE CODES",
                A: { title: "ฟิสิกส์และเคมีแห่งสสาร", desc: "กฎทางฟิสิกส์ แรงโน้มถ่วง สูตรเคมีดั้งเดิม และโครงสร้างโมเลกุลในชีวิตประจำวัน", diff: "⭐⭐⭐" },
                B: { title: "ดาราศาสตร์และชีววิทยา", desc: "สำรวจดาวเคราะห์แดง ระบบสุริยะ และจักรกลอวัยวะที่มีชีวิตของเซลล์มนุษย์", diff: "⭐⭐⭐⭐" }
            },
            5: {
                title: "5. คณิตศาสตร์",
                badge: "MATH COMBAT STAGE",
                A: { title: "พีชคณิตและสมการเลข", desc: "ลุยหาค่าตัวแปรลึกลับ พีทาโกรัส และสูตรการหาพื้นที่ทางเรขาคณิตขั้นรวดเร็ว", diff: "⭐⭐⭐⭐" },
                B: { title: "ตรรกศาสตร์และความน่าจะเป็น", desc: "ความน่าจะเป็นของการทอยสุ่ม ดัชนีเลขฐานสอง และความมหัศจรรย์ของฟีโบนัชชี", diff: "⭐⭐⭐⭐⭐" }
            },
            6: {
                title: "6. ตำนานทั่วโลก",
                badge: "MYTH & FOLKLORE STAGE",
                A: { title: "ตำนานเทพกรีกและนอร์ส", desc: "สืบค้นข้อมูลสายฟ้ามหาเทพซุส สวรรค์โอลิมปัส ค้อนสายฟ้าของธอร์ และสุนัขเฝ้านรกเซอร์เบอรัส", diff: "⭐⭐⭐" },
                B: { title: "ตำนานเอเชียและอียิปต์โบราณ", desc: "ถอดรหัสความลึกลับของอักษรภาพอียิปต์ ยมเทพอนูบิส ทศกัณฐ์หน้าสิบ และเทพารักษ์ตะวันออก", diff: "⭐⭐⭐⭐" }
            }
        };
 
 
let selectedMainCatId = 1;
        let selectedSubArena = "A"; // "A" or "B"
        let activeQuestions = [];
        let currentQuestionIdx = 0;
        
        let playerHP = 100;
        let enemyHP = 100;
        let timerInstance = null;
        let timeRemaining = 15;
        const maxTime = 15;
        let isAnsweringLocked = false;
        let isMuted = false;
        let activeStreak = 0;
        let audioCtx = null;
 
        // Initialize Web Audio API safely on physical user gesture
        function initAudio() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }
 
        document.body.addEventListener('click', initAudio, { once: true });
        document.body.addEventListener('touchstart', initAudio, { once: true });
 
        // Synth Sound Generator (No external files dependency)
        function playSound(type) {
            if (isMuted) return;
            initAudio();
            try {
                const osc = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                osc.connect(gainNode);
                gainNode.connect(audioCtx.destination);
 
                if (type === 'hit') {
                    // Quick impact crunch sound
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(160, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.25);
                    gainNode.gain.setValueAtTime(0.35, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.25);
                } else if (type === 'correct') {
                    // Happy chime double-note
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(440, audioCtx.currentTime); 
                    osc.frequency.setValueAtTime(554, audioCtx.currentTime + 0.1); 
                    osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.2); 
                    gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.45);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.45);
                } else if (type === 'wrong') {
                    // Low error buzz descending
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(130, audioCtx.currentTime);
                    osc.frequency.linearRampToValueAtTime(45, audioCtx.currentTime + 0.4);
                    gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.4);
                } else if (type === 'victory') {
                    // Success fanfare chords
                    const chords = [523.25, 659.25, 783.99, 1046.50]; 
                    chords.forEach((freq, idx) => {
                        const noteOsc = audioCtx.createOscillator();
                        const noteGain = audioCtx.createGain();
                        noteOsc.type = 'triangle';
                        noteOsc.frequency.setValueAtTime(freq, audioCtx.currentTime + (idx * 0.12));
                        noteGain.gain.setValueAtTime(0.18, audioCtx.currentTime + (idx * 0.12));
                        noteGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + (idx * 0.12) + 0.25);
                        noteOsc.connect(noteGain);
                        noteGain.connect(audioCtx.destination);
                        noteOsc.start(audioCtx.currentTime + (idx * 0.12));
                        noteOsc.stop(audioCtx.currentTime + (idx * 0.12) + 0.25);
                    });
                } else if (type === 'defeat') {
                    // Melancholic slide down
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.6);
                    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.6);
                }
            } catch (err) {
                console.warn("Audio initialization issue: ", err);
            }
        }
 
        // Toggle Audio Icon & Master Mute State
        function toggleMute() {
            isMuted = !isMuted;
            const buttons = [document.getElementById("sound-toggle"), document.querySelector("#game-sound-btn button")];
            buttons.forEach(btn => {
                if (!btn) return;
                if (isMuted) {
                    btn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-tkRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                    `;
                } else {
                    btn.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M17.95 5.05a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
                        </svg>
                    `;
                }
            });
        }
 
        // Interface Navigation Handlers
        function goToMainCategorySelect() {
            playSound('correct');
            document.getElementById("lobby-screen").classList.add("hidden");
            document.getElementById("main-category-screen").classList.remove("hidden");
        }
 
        function backToLobbyFromMainCategory() {
            playSound('hit');
            document.getElementById("main-category-screen").classList.add("hidden");
            document.getElementById("lobby-screen").classList.remove("hidden");
        }
 
        function selectMainCategory(id) {
            playSound('correct');
            selectedMainCatId = id;
            const meta = subcategoryMeta[id];
            
            // Render sub-screens dynamic elements with correct locale strings
            document.getElementById("sub-parent-badge").innerText = meta.badge;
            document.getElementById("sub-parent-title").innerHTML = `SELECT <span class="text-tkRed">SUB-ARENA</span>`;
            
            document.getElementById("sub-title-a").innerText = meta.A.title;
            document.getElementById("sub-desc-a").innerText = meta.A.desc;
            document.getElementById("sub-difficulty-a").innerText = meta.A.diff;
 
            document.getElementById("sub-title-b").innerText = meta.B.title;
            document.getElementById("sub-desc-b").innerText = meta.B.desc;
            document.getElementById("sub-difficulty-b").innerText = meta.B.diff;
 
            // Transition screens smoothly
            document.getElementById("main-category-screen").classList.add("hidden");
            document.getElementById("subcategory-screen").classList.remove("hidden");
        }
 
        function backToMainCategory() {
            playSound('hit');
            document.getElementById("subcategory-screen").classList.add("hidden");
            document.getElementById("main-category-screen").classList.remove("hidden");
        }
 
        function selectSubCategory(subId) {
            playSound('correct');
            selectedSubArena = subId;
            const combinedKey = `${selectedMainCatId}${selectedSubArena}`;
            activeQuestions = stagesDatabase[combinedKey] || [];
            
            // Set Stage Badge UI
            document.getElementById("current-arena-badge").innerText = `STAGE-0${selectedMainCatId}${selectedSubArena}`;
            
            // Reset gameplay states
            currentQuestionIdx = 0;
            playerHP = 100;
            enemyHP = 100;
            activeStreak = 0;
            updateHPUI();
            
            // Reset combo counters visual
            const badge = document.getElementById("player-streak");
            badge.classList.add("hidden");
            badge.innerText = "COMBO x0 🔥";
 
            // Dismiss screens overlay
            document.getElementById("overlay-screen").classList.add("hidden");
 
            // Transition into the active arena
            document.getElementById("subcategory-screen").classList.add("hidden");
            document.getElementById("game-container").classList.remove("hidden");
 
            // Deploy the first question card
            loadQuestion();
        }
 
        function loadQuestion() {
            isAnsweringLocked = false;
            
            if (currentQuestionIdx >= activeQuestions.length) {
                // Safeguard: wrap around loop if database is exhausted in matches
                currentQuestionIdx = 0;
            }
 
            const activeQuestionData = activeQuestions[currentQuestionIdx];
            
            // Reset choices styling
            for (let i = 0; i < 4; i++) {
                const btn = document.getElementById(`btn-${i}`);
                btn.className = "quiz-btn text-left py-3.5 px-6 text-sm md:text-base text-gray-200 font-medium flex items-center gap-3";
                btn.disabled = false;
            }
 
            // Set HUD and question text elements
            document.getElementById("question-number").innerText = `STAGE ${selectedMainCatId}${selectedSubArena} - QUESTION ${currentQuestionIdx + 1}:`;
            document.getElementById("question-text").innerText = activeQuestionData.q;
            
            // Populate buttons
            for (let i = 0; i < 4; i++) {
                document.getElementById(`choice-${i}`).innerText = activeQuestionData.c[i];
            }
 
            // Reset announcement banners
            document.getElementById("battle-round-text").innerText = `ROUND ${currentQuestionIdx + 1}`;
            document.getElementById("battle-announcer").innerText = "เตรียมปะทะสายฟ้าปัญญา!";
            
            // Reset countdown clock
            resetTimer();
        }
 
        function resetTimer() {
            clearInterval(timerInstance);
            timeRemaining = maxTime;
            updateTimerUI();
            
            timerInstance = setInterval(() => {
                timeRemaining--;
                updateTimerUI();
                
                if (timeRemaining <= 0) {
                    clearInterval(timerInstance);
                    handleTimeOut();
                }
            }, 1000);
        }
 
        function updateTimerUI() {
            const bar = document.getElementById("timer-bar-fill");
            const text = document.getElementById("timer-text");
            const percentage = (timeRemaining / maxTime) * 100;
            
            bar.style.width = `${percentage}%`;
            text.innerText = timeRemaining;
 
            if (timeRemaining <= 5) {
                bar.className = "h-full bg-tkRed animate-pulse";
                text.className = "orbitron text-xs md:text-sm font-bold text-tkRed w-5 text-right";
            } else {
                bar.className = "h-full bg-tkPurple";
                text.className = "orbitron text-xs md:text-sm font-bold text-tkYellow w-5 text-right";
            }
        }
 
        function handleTimeOut() {
            if (isAnsweringLocked) return;
            isAnsweringLocked = true;
            clearInterval(timerInstance);
 
            for (let i = 0; i < 4; i++) {
                document.getElementById(`btn-${i}`).disabled = true;
            }
 
            const correctIdx = activeQuestions[currentQuestionIdx].a;
            document.getElementById(`btn-${correctIdx}`).classList.add("correct");
 
            document.getElementById("battle-announcer").innerText = "⏰ หมดเวลา! ศัตรูพุ่งโจมตีกะทันหัน!";
            
            resetStreak();
 
            setTimeout(() => {
                triggerEnemyAttack(20);
            }, 450);
 
            nextQuestionTransition();
        }
 
        function submitAnswer(selectedIndex) {
            if (isAnsweringLocked) return;
            isAnsweringLocked = true;
            clearInterval(timerInstance);
 
            for (let i = 0; i < 4; i++) {
                document.getElementById(`btn-${i}`).disabled = true;
            }
 
            const currentData = activeQuestions[currentQuestionIdx];
            const correctIdx = currentData.a;
 
            if (selectedIndex === correctIdx) {
                // Correct Answer selected
                document.getElementById(`btn-${selectedIndex}`).classList.add("correct");
                playSound('correct');
                
                incrementStreak();
 
                // Compute final damage based on current active combo streaks
                const baseDmg = 20;
                const multiplier = 1 + (activeStreak * 0.15);
                const finalDmg = Math.round(baseDmg * multiplier);
 
                document.getElementById("battle-announcer").innerText = `🎯 ถูกต้อง! ปลดปล่อยพลังดาเมจแรงกระแทก: ${finalDmg}!`;
                
                setTimeout(() => {
                    triggerPlayerAttack(finalDmg);
                }, 400);
            } else {
                // Wrong Answer selected
                document.getElementById(`btn-${selectedIndex}`).classList.add("wrong");
                document.getElementById(`btn-${correctIdx}`).classList.add("correct");
                playSound('wrong');
 
                resetStreak();
 
                document.getElementById("battle-announcer").innerText = "❌ ตอบผิดพลาด! โดนสวนกลับอย่างรุนแรง!";
                
                setTimeout(() => {
                    triggerEnemyAttack(25);
                }, 450);
            }
 
            nextQuestionTransition();
        }
 
        function triggerPlayerAttack(damage) {
            const playerSprite = document.getElementById("player-sprite");
            const enemySprite = document.getElementById("enemy-sprite");
 
            playerSprite.classList.remove("idle-player");
            playerSprite.classList.add("attacking-player");
 
            setTimeout(() => {
                playSound('hit');
                enemySprite.classList.remove("idle-enemy");
                enemySprite.classList.add("hit");
                
                flashScreen("red");
                applyDamageToEnemy(damage);
                showDamageFloatingNumber("enemy-damage-pos", damage, "text-tkYellow");
            }, 300);
 
            setTimeout(() => {
                playerSprite.classList.remove("attacking-player");
                playerSprite.classList.add("idle-player");
                enemySprite.classList.remove("hit");
                enemySprite.classList.add("idle-enemy");
            }, 750);
        }
 
        // Enemy dash logic implementation
        function triggerEnemyAttack(damage) {
            const playerSprite = document.getElementById("player-sprite");
            const enemySprite = document.getElementById("enemy-sprite");
 
            enemySprite.classList.remove("idle-enemy");
            enemySprite.classList.add("attacking-enemy");
 
            setTimeout(() => {
                playSound('hit');
                playerSprite.classList.remove("idle-player");
                playerSprite.classList.add("hit");
                
                shakeScreenViewport();
                flashScreen("purple");
                applyDamageToPlayer(damage);
                showDamageFloatingNumber("player-damage-pos", damage, "text-tkRed");
            }, 300);
 
            setTimeout(() => {
                enemySprite.classList.remove("attacking-enemy");
                enemySprite.classList.add("idle-enemy");
                playerSprite.classList.remove("hit");
                playerSprite.classList.add("idle-player");
            }, 750);
        }
 
        function showDamageFloatingNumber(anchorId, val, styling) {
            const container = document.getElementById(anchorId);
            if (!container) return;
            
            const div = document.createElement("div");
            div.className = `absolute damage-number text-4xl md:text-6xl font-black italic tracking-tighter orbitron ${styling} z-40 select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]`;
            div.innerText = `-${val}`;
            
            container.appendChild(div);
 
            setTimeout(() => {
                div.remove();
            }, 900);
        }
 
        function shakeScreenViewport() {
            const el = document.getElementById("game-container");
            el.classList.add("shake-screen");
            setTimeout(() => {
                el.classList.remove("shake-screen");
            }, 400);
        }
 
        function flashScreen(type) {
            const el = document.getElementById("screen-flash");
            if (type === "red") {
                el.className = "fixed inset-0 pointer-events-none z-50 bg-tkRed/30 transition-all duration-75";
            } else if (type === "purple") {
                el.className = "fixed inset-0 pointer-events-none z-50 bg-tkPurple/30 transition-all duration-75";
            }
            setTimeout(() => {
                el.className = "fixed inset-0 pointer-events-none z-50 bg-transparent transition-all duration-75";
            }, 100);
        }
 
        function applyDamageToPlayer(amount) {
            playerHP -= amount;
            if (playerHP < 0) playerHP = 0;
            updateHPUI();
 
            if (playerHP <= 0) {
                setTimeout(() => {
                    endTournamentMatch(false);
                }, 800);
            }
        }
 
        function applyDamageToEnemy(amount) {
            enemyHP -= amount;
            if (enemyHP < 0) enemyHP = 0;
            updateHPUI();
 
            if (enemyHP <= 0) {
                setTimeout(() => {
                    endTournamentMatch(true);
                }, 800);
            }
        }
 
        function updateHPUI() {
            document.getElementById("player-hp-text").innerText = `${playerHP}/100`;
            const playerBar = document.getElementById("player-hp-bar");
            playerBar.style.width = `${playerHP}%`;
            
            if (playerHP <= 30) {
                playerBar.className = "hp-bar-fill h-full bg-gradient-to-r from-tkRed to-orange-500 rounded-sm animate-pulse";
            } else {
                playerBar.className = "hp-bar-fill h-full bg-gradient-to-r from-tkPurple to-indigo-500 rounded-sm";
            }
 
            document.getElementById("enemy-hp-text").innerText = `${enemyHP}/100`;
            const enemyBar = document.getElementById("enemy-hp-bar");
            enemyBar.style.width = `${enemyHP}%`;
 
            if (enemyHP <= 30) {
                enemyBar.className = "hp-bar-fill h-full bg-gradient-to-l from-tkRed to-orange-500 rounded-sm animate-pulse";
            } else {
                enemyBar.className = "hp-bar-fill h-full bg-gradient-to-l from-tkRed to-rose-500 rounded-sm";
            }
        }
 
        function incrementStreak() {
            activeStreak++;
            const badge = document.getElementById("player-streak");
            badge.innerText = `COMBO x${activeStreak} 🔥`;
            badge.classList.remove("hidden");
        }
 
        function resetStreak() {
            activeStreak = 0;
            const badge = document.getElementById("player-streak");
            badge.classList.add("hidden");
            badge.innerText = "COMBO x0 🔥";
        }
 
        function nextQuestionTransition() {
            setTimeout(() => {
                if (playerHP > 0 && enemyHP > 0) {
                    currentQuestionIdx++;
                    loadQuestion();
                }
            }, 2500);
        }
 
        function endTournamentMatch(isPlayerVictory) {
            clearInterval(timerInstance);
            
            const overlay = document.getElementById("overlay-screen");
            const title = document.getElementById("overlay-title");
            const subtitle = document.getElementById("overlay-subtitle");
            const actionBtnText = document.getElementById("overlay-action-text");
 
            overlay.classList.remove("hidden");
 
            if (isPlayerVictory) {
                playSound('victory');
                title.innerText = "K.O. VICTORY";
                title.className = "orbitron text-5xl md:text-8xl font-black italic tracking-tighter mb-2 text-glow-purple text-emerald-400 uppercase";
                subtitle.innerText = `เฉียบขาดมาก! ปัญญาของคุณแข็งแกร่งดั่งหมัดเหล็ก คู่ต่อสู้พ่ายแพ้อย่างสมบูรณ์แบบในอารีน่า!`;
                actionBtnText.innerText = "CHOOSE NEXT ARENA 🏆";
            } else {
                playSound('defeat');
                title.innerText = "K.O. DEFEATED";
                title.className = "orbitron text-5xl md:text-8xl font-black italic tracking-tighter mb-2 text-glow-red text-tkRed uppercase";
                subtitle.innerText = `ความพ่ายแพ้เป็นจุดเริ่มต้นของแชมเปี้ยน! กลับไปเสริมความรู้แล้วลองท้าทายศัตรูใหม่อีกครั้ง!`;
                actionBtnText.innerText = "TRY AGAIN 🥊";
            }
        }
 
        function restartGame() {
            document.getElementById("overlay-screen").classList.add("hidden");
            document.getElementById("game-container").classList.add("hidden");
            document.getElementById("subcategory-screen").classList.remove("hidden");
            playSound('correct');
        }
 
        function confirmExit() {
            if (confirm("คุณต้องการที่จะยอมแพ้ (Give Up) และกลับสู่หน้าเลือกหมวดหมู่หรือไม่?")) {
                clearInterval(timerInstance);
                playSound('defeat');
                document.getElementById("game-container").classList.add("hidden");
                document.getElementById("main-category-screen").classList.remove("hidden");
            }
        }
