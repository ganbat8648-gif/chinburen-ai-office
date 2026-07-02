'use client';

import { useState } from 'react';

const tabs = ['Home','Calendar','Parliament','Gmail','Health','Tasks','Rules'];

export default function Page() {
  const [tab, setTab] = useState('Home');
  return (
    <div className="shell">
      <aside className="sidebar">
        <h1>Chinburen AI Office</h1>
        <div className="nav">{tabs.map(t => <button key={t} className={tab===t?'active':''} onClick={()=>setTab(t)}>{t}</button>)}</div>
      </aside>
      <main className="main">
        <div className="topbar">
          <div><h2>AI Office Cockpit v1.0</h2><div className="muted">Prototype → real web app</div></div>
          <div className="muted">Rule: New / Changed / Action only</div>
        </div>
        {tab === 'Home' && <Home />}
        {tab === 'Calendar' && <Calendar />}
        {tab === 'Parliament' && <Simple title="Parliament Watch" items={['БОХХААБХ 10:00 — Calendar дээр байна.','Чуулган 14:00 — Calendar дээр байна.','Ажлын хэсэг: нэмэхээс өмнө заавал асууна.','17:00 item зөвхөн official schedule баталгаажсаны дараа.']} />}
        {tab === 'Gmail' && <Simple title="Gmail Priority" items={['1 invitation имэйл илэрсэн.','Өндөр ач холбогдолтой биш тул бага түвшинд үлдээв.','Travel: шинэ мэдээлэл байхгүй.','2026.07.05 UBN → ICN-г дахин харуулахгүй.']} />}
        {tab === 'Health' && <Simple title="Health Intelligence" items={['Энэ block-д шинэ health update байхгүй.','Давтагдсан AI журам, Science Partnership, Health Promotion Center, NCD Plan-г дахин харуулахгүй.']} />}
        {tab === 'Tasks' && <Simple title="Tasks" items={['10:00 conflict resolution','Dashboard-г live website болгох','17:00 Parliament item зөвхөн баталгаажсаны дараа нэмэх']} />}
        {tab === 'Rules' && <Simple title="Dashboard Rules" items={['Зөвхөн NEW / CHANGED / ACTION REQUIRED / CONFLICT мэдээлэл харуулна.','Давхцал хамгийн эхэнд гарна.','Ажлын хэсгийг calendar-т нэмэхээс өмнө заавал асууна.','Brief 30 секундэд уншигдах ёстой.']} />}
      </main>
    </div>
  );
}

function Home() {
  return <div className="grid">
    <Metric title="Conflicts" value="1" badge="ACTION" color="red" />
    <Metric title="Priority Email" value="1" badge="LOW" color="yellow" />
    <Metric title="Travel" value="0" badge="NO NEW" color="green" />
    <Metric title="Health" value="0" badge="SILENT" color="green" />
    <section className="card span12"><h3>Өглөөний 30 секундийн бриф</h3><ul>
      <li><span className="badge red">CONFLICT</span><b>10:00</b> TV9 ярилцлага нь БОХХААБХорооны хуралтай давхцаж байна.</li>
      <li><span className="badge blue">TODAY</span>12:00 Сүрьеэ БНСУ үдийн хоол · 14:00–17:00 Чуулган.</li>
      <li><span className="badge green">TRAVEL</span>Шинэ travel мэдээлэл байхгүй. Өмнөх ICN нислэгийг дахин харуулахгүй.</li>
    </ul></section>
    <section className="card span6"><h3>Анхаарах 3 зүйл</h3><ol><li><b>10:00 давхцлыг шийдэх.</b></li><li><b>БОХХААБХ-д хэн оролцохыг тодруулах.</b></li><li><b>Чуулганы материал хэрэгтэй эсэхийг шалгах.</b></li></ol></section>
    <section className="card span6"><h3>AI Suggestions</h3><ul><li>Давхцлыг хамгийн эхний card дээр автоматаар гаргах.</li><li>Ач холбогдол багатай invitation-г silent/low relevance болгох.</li></ul></section>
  </div>;
}

function Metric({title,value,badge,color}:{title:string,value:string,badge:string,color:string}) {
  return <section className="card span3"><h3>{title}</h3><div className="metric">{value}</div><span className={`badge ${color}`}>{badge}</span></section>;
}

function Calendar() {
  return <div className="grid"><section className="card span12"><h3>Өнөөдрийн Calendar</h3><table><tbody>
    <tr><th>Цаг</th><th>Арга хэмжээ</th><th>Байршил</th><th>Төлөв</th></tr>
    <tr><td>10:00–11:00</td><td>TV9 ярилцлага</td><td>Төрийн ордон</td><td><span className="badge red">Давхцал</span></td></tr>
    <tr><td>10:00–12:00</td><td>БОХХААБХорооны хурал</td><td>Их засаг танхим</td><td><span className="badge red">Давхцал</span></td></tr>
    <tr><td>12:00–13:00</td><td>Сүрьеэ БНСУ үдийн хоол</td><td>—</td><td><span className="badge green">OK</span></td></tr>
    <tr><td>14:00–17:00</td><td>Чуулган</td><td>Төрийн ордон</td><td><span className="badge green">OK</span></td></tr>
  </tbody></table></section></div>;
}

function Simple({title,items}:{title:string,items:string[]}) {
  return <div className="grid"><section className="card span12"><h3>{title}</h3><ul>{items.map((i,idx)=><li key={idx}>{i}</li>)}</ul></section></div>;
}
