async function test(){
let response = await fetch('test.json')
let data = await response.json()
console.log(data)

}
test()


const fs = require('fs');

async function addData() {
  try {
    // قراءة البيانات الحالية
    const rawData = fs.readFileSync('test.json', 'utf8');
    const jsonData = JSON.parse(rawData);

    // الحصول على معلومات جديدة من المستخدم
    const name = prompt('ادخل الاسم:');
    const age = prompt('ادخل العمر:');
    const city = prompt('ادخل المدينة:');

    // إنشاء كائن جديد وإضافته إلى البيانات
    const newEntry = { name, age, city };
    jsonData.push(newEntry);

    // حفظ البيانات في الملف
    fs.writeFileSync('test.json', JSON.stringify(jsonData, null, 2));

    alert('تمت إضافة البيانات بنجاح!');
  } catch (error) {
    console.error('حدث خطأ:', error);
    alert('فشل في حفظ البيانات');
  }
}

addData();
