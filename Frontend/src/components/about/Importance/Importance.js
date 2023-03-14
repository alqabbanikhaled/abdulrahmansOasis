import React from "react";
import cn from "classnames";

import styles from "./Importance.module.scss";

const Importance = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y bg-3")}>
      <div className={cn(styles.container, "mb-10")}>
        <div className={styles.importanceImg}>
          <img src="./importance.jpg" alt="" />
          <img className={styles.vector} src="./svg/back_1.svg" alt="" />
        </div>
        <div className={cn(styles.importanceText, "mb-2")}>
          <h1 className="color-green">أهمية برامج حياة الطفل</h1>
          <div className="color-gray paragraph2-size mb-5">
            یرکز الأخصائیون المعنیون بشؤون حیاة الطفل علی النمو والسلامة
            المثالیین للرضع والأطفال والمراهقین والشباب مع تعزیز مهارات التأقلم
            وتقلیل الآثار السلبیة الناتجة عن تلقي العلاج بالمستشفی، و/أو تلقي
            الرعایة الصحیة، و/أو التجارب الأخرى التي قد تکون مرهقة <br /> <br />{" "}
            یوفر الأخصائیون المعنیون بشؤون حیاة الطفل أماکن للرضع والأطفال
            والمراهقین والشباب وأسرهم لمشارکة وفهم ومعالجة مشاعرهم. کما یلتقون
            بالمرضی من الأطفال وأسرهمحیث هم.
          </div>
          <div className={styles.quotes}>
            <div className={styles.quotesImg}>
              <img src="./svg/quotes.svg" alt="quotes" />
            </div>
            <div
              className={cn(
                styles.quotesText,
                "color-green paragraph3-size font-weight-medium"
              )}
            >
              وفق الأکادیمیة الأمریکیة لطب الأطفال:یتمتع الاخصائیون المعنیون
              بشؤون حیاة الطفل بالمؤهلات المثالیة لدعم المرضى وأسرهم من خلال
              التدخلات التي تعتبر في غایة الأهمیة لسلامة الأطفال وأسرهم،وتتمحور
              حول الإجراءات والممارسات التي ترکز علی المرضی وأسرهم.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="paragraph5-size font-weight-medium">
          النموذج الذي سیتم من خلاله تقدیم خدمات برامج حیاة الطفل
        </div>
        <div className="color-gray paragraph1-size mb-3">
          للمساعدة علی تلبیة الاحتیاجات السریریة والنفسیة والاجتماعیة، سیتضمن
          نموذج تقدیمخدمات حیاة الطفل العناصر الرئیسیة التالیة:
        </div>
      </div>
      <div className={cn(styles.modelItems, "color-black paragraph1-size")}>
        <div>
          سیعمل فریق حیاة الطفل عن کثب مع الفریق السریري، وخاصة فریق التمریض
          لتقدیمخدمات حیاة الطفل
        </div>
        <hr />
        <div>
          یجب أن یکون لدى الأخصائیین المعنیین بشؤون حیاة الطفل »ألعاب متنقلة«
          لضمان تقدیم الخدمات بجانب سریر المریض، حیث یلزم معظم المرضی غرفهم ولا
          تتاح لهم الفرصة لزیارة غرفة اللعب أو الفصل الدراسي
        </div>
        <hr />
        <div>
          سیتم تعیین أخصائیین معنیین بشؤون حیاة الطفل في کل جناح وسیتلقون تدریبا
          إضافيا بناء علی مجال تقدیم الخدمات، بالإضافة إلی تلقیهم التدریب
          والتعلیم السریري وفي الموقع حالیا. فعلی سبیل المثال، سیتلقی الأخصائیون
          المعنیون بشؤون حیاة الطفل المکلفون بتقدیم الدعم لمرضی السرطان تدریبا
          إضافیا في هذا المجال.
        </div>
        <hr />
        <div>
          ستعمل برامج حیاة الطفل بالشراکة مع برامج العمل الاجتماعي للإحالة إلی
          خدمات العملً الاجتماعي التي تدعم احتیاجات الأطفال وأسرهم، فضلا عن
          الخدمات الخارجیة الإضافیة لدعماحتیاجات الأطفال وأسرهم
        </div>
      </div>
    </section>
  );
};

export default Importance;
