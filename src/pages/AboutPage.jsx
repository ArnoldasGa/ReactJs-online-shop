import React, {useState} from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function AboutPage() {
  const faqs = [
    {
      question: 'Kas yra eteriniai aliejai?',
      answer:
        'Eteriniai aliejai yra koncentratai, išgauti iš augalų, kurie turi unikalių gydomųjų savybių. Jie naudojami aromaterapijoje, masažuose, taip pat kosmetikoje.',
    },
    {
      question: 'Kaip naudoti eterinius aliejus?',
      answer:
        'Eteriniai aliejai gali būti naudojami masažams, įkvėpimams, pridedami prie vonių arba naudojami kaip natūralūs kvapikliai.',
    },
    {
      question: 'Ar eteriniai aliejai saugūs?',
      answer:
        'Eteriniai aliejai yra natūralūs, tačiau juos reikia naudoti atsargiai. Rekomenduojame laikytis nurodytų dozių ir vengti tiesioginio kontakto su oda neskiestais aliejais.',
    },
    {
      question: 'Kokie eteriniai aliejai tinka atsipalaidavimui?',
      answer:
        'Levandos, ramunėlės ir sandalmedžio aliejai yra žinomi dėl savo raminamųjų savybių ir puikiai tinka atsipalaidavimui.',
    },
    {
      question: 'Kur laikyti eterinius aliejus?',
      answer:
        'Eterinius aliejus reikia laikyti vėsioje, sausoje vietoje, toliau nuo tiesioginių saulės spindulių, kad neprarastų savo naudingų savybių.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // If the FAQ is already open, close it
    } else {
      setOpenIndex(index); // Otherwise, open it
    }
  };
  return (
    <>
      <div className="faq-section">
      <h2>Dažniausiai užduodami klausimai apie eterinius aliejus</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
    </>
  );
}

export default AboutPage;
