import { Injectable } from '@angular/core';
import { Event } from './event'
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  private baseUrl: string = '';
  
  constructor(private http: Http) {
    
  }

  getEvents(): Observable<Event[]> {
    let events = this.http.get(this.baseUrl + '../assets/events.json', {headers: this.getHeaders()})
      .map(this.mapEvents);
      return events;
    // return [
    //   {eventId:132510417453240,
    //   title:"Discover Tinnes with Aspire إكتشف التنس مع أسباير",
    //   description:"For the second year in a row, young talents are invited to “Discover Tennis with Aspire”.\n\nFour certified coaches will teach your kid how to serve in tennis. Basic and advanced levels are available, so your kid will leave with confidence and agility.\n\nThe tennis festival is open for talented boys and girls between 6 and 12 years old. It will end with a celebration for all talents. At Aspire, everyone is a winner.\n\n22 days filled of fun to help your child lead a healthy lifestyle and make new friends.\n\nFor further info: events@aspire.qa\n\nPlace: Tennis Court 1 and 2, near Ladies Sports Hall\nDate: 2 Oct - 13 Dec (Mon & Wed)\nTime:   4 – 5 pm (6 – 9 years old) 5 – 6 pm (10 – 12 years old)\n\nاكتشف التنس مع أسباير\n\nللعام الثاني على التوالي، ندعو الأطفال الموهوبين للمشاركة في فعالية \"اكتشف التنس مع أسباير\".\n\nسيقوم أربعة مدربين معتمدين بتدريب أطفالكم على مهارات لعبة التنس، مع مراعاة مستويات الأداء المختلفة، وستقسم التدريبات إلى مستويين وهما: مبتدئ ومتقدم.\n\nالبرنامج مفتوح للبنات والأولاد من عمر 6 وحتى 12. وسيقام احتفال في نهاية مهرجان التنس، لتكريم جميع المشاركين. فمع أسباير، الكل رابح.\n\nسينهي طفلك الدورة وهو يتمتع بالثقة والرشاقة، حيث سيتمكن من التعرف على أسلوب الحياة الصحي وسيكتسب صداقات جديدة خلال 22 يوماً من المرح.\n\nلمزيد من المعلومات: events@aspire.qa\n\nالمكان: ملاعب التنس 1 و2 بجانب صالة النساء الرياضية\nالتاريخ: 2 أكتوبر – 13 ديسمبر (الاثنين والأربعاء)\nالوقت:  4 – 5 مساء (6 – 9 سنوات) 5 – 6 مساء (10 – 12 سنة)","startDateTime":1511787600000,"endDateTime":1513177200000,"url":null},{"eventId":115422142487279,"title":"Qatar’s Strongest Man 2017","description":"Experience Superhuman Strength Unleashed\n\nBack in its 5th edition, Qatar’s Strongest Man returns to Aspire. The competition will be fierce as returning rivals battle it out through a series of impossible challenges of brawn, speed and endurance. Every test is designed to push the participants to their absolute limits, challenging not only their physical strength, but their agility and mental toughness as well.\n\nDon’t miss the opportunity to witness the most physically powerful men who will be selected to compete and showcase their strength and endurance in a series of challenges.\n\nThe two-day event will include two categories:\n\nThe Open competitions for the community on Friday 24th November.\n\nThe Qatari only competitions on Saturday 25th November. \n\nFor Participants:\n\nAre you worthy of the title of Qatar’s Strongest Man 2017?\n\nIf you believe that you have the physical and mental strength to compete in this grueling competition, Register NOW!\n\nNote that Participants must be aged 18 years old or over, and will be subject to strength tests and a screening process before being selected ahead of the event.\n\nTo register:\nhttp://crm.aspirezone.qa/Registrations/RegistrationPage.aspx?event=GqtIDv68AUPHXKQSIriM4A%3d%3d\n\nRegistration Fees: 100 QR\n\nEvent Date: 24-25 November\n\nTime: 17:00-21:30\n\nLocation: Aspire Park - Parking Area opposite to Pitches # 10 &11\n\nأقوى رجل في قطر 2017 النسخة الخامسة\n\nانضموا إلى أقوى حدث في قطر\n\nتعود منافسة \"أقوى رجل في قطر\" من جديد للسنة الخامسة على التوالي بمجموعة من التحديات القاسية المُصممة خصيصاً لاختبار القوة والسرعة والقدرة على التحمل. تم تصميم كل مرحلة لاختبار قدرة تحمل المشاركين القصوى، مما يشكل تحديا للقوة الجسدية والذهنية على حد سواء.\n\nلا تفوتوا فرصة الحضور لمشاهدة المشاركين الأقوى جسدياً في سلسلة من المواجهات الشيقة والاختبارات القاسية في أقوى حدث في قطر.\n\nستقام الفعالية على مدى يومين وستتضمن الفئات التالية: \nالمنافسات المفتوحة للمشاركين من المجتمع  يوم الجمعة الموافق 24 نوفمبر.\n\nمنافسات أقوى رجل للقطريين فقط يوم السبت الموافق 25 نوفمبر.\n\nللمشاركين:\n\nهل تستحق الفوز بلقب أقوى رجل في قطر 2017؟\n\nإذا كنت تمتلك  القوة البدنية والقدرة الذهنية  للتنافس في سلسلة من الاختبارات القاسية، سجّل الآن!\n\nتنويه هام: الاشتراك مفتوح لكل المواطنين والمقيمين من عمر 18 سنة و ما فوق. وسيتم اختيار المشاركين بعد أن يخضعوا لسلسلة من اختبارات القوة الشاملة في أسباير زون للتأكد من لياقتهم وقدرتهم على المشاركة في المسابقة.\n\nللتسجيل:\nhttp://crm.aspirezone.qa/Registrations/RegistrationPage.aspx?event=GqtIDv68AUPHXKQSIriM4A%3d%3d&lang=2YmxjqWug3Ua%2fVIdLZpdBQ%3d%3d\n\nرسوم الاشتراك: 100 ريال قطري\n\nموعد المنافسة: 24 و 25 نوفمبر 2017\n\nالزمان: 17:00 – 21:30\n\nالمكان: حديقة أسباير - مواقف السيارات المقابلة لملعبي رقم 10 و11","startDateTime":1511532000000,"endDateTime":1511634600000,"url":null},{"eventId":142697206454649,"title":"Seaside Full Moon Yoga","description":"Harness the energy of the first and last supermoon of 2017 by the beach at Four Seasons Hotel Doha with a 60-minute yoga session. \nYoga session starts at 7:00 pm\nDuration: 60 minutes\nLocation: Four Seasons Beach\nPrice: 70 QAR per person\n\nTo register, please contact the Spa on 44948802",
    //   startDateTime:1512316800000,
    //   endDateTime:1512320400000,
    //   url:null}
    // ];
  }
  
  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private toEvent(r:any): Event{
    let event = <Event>({
      eventId: Number.parseInt(r.eventId),
      title: r.title,
      description: r.description,
      startDateTime: Number.parseInt(r.startDateTime),
      endDateTime: Number.parseInt(r.endDateTime),
      url: r.url
    });
    console.log('Parsed event:', event);
    return event;
  }

  private mapEvents(response:Response): Event[]{
    // The response of the API has a results
    // property with the actual results
    console.log(response)
    console.log(response.json()[1])
    console.log(response.text()[1])
    
    let events : Event[] = [];
    events = response.json()
    return events
    // return response.json().map((x) => this.toEvent(x))
    // return response.json().map(this.toEvent.bind(this))
    
    // let x = [{
    //   eventId:132510417453240,
    //   title:"Discover",
    //   description:"do",
    //   startDateTime:1512316800000,
    //   endDateTime:1512320400000,
    //   url:null
    // }]

    // this.toEvent(x[0])

    // events.forEach(element => {
    //   console.log(element)
    //   this.toEvent(element)
    // });

    //return events
    // return events.map(this.toEvent)
    //console.log(response.json().map(this.toEvent))
    //return this.toEvent(response.json());   
 }

  

}
