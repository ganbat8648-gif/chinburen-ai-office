const nav = ['Dashboard','Calendar','Parliament','Gmail','Health Intelligence','Tasks','Handbook','Settings'];

export default function Page() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">Chinburen AI Office<small>Chief of Staff AI</small></div>
        <nav className="nav">{nav.map((item,index)=><a key={item} className={index===0?'active':''} href="#">{item}</a>)}</nav>
      </aside>
      <main className="main">
        <div className="top">
          <div className="title"><h1>Good morning, Ganbat</h1><p>Өөрчлөлтөд суурилсан AI Office dashboard · v1 starter</p></div>
          <span className="pill">NEW / CHANGED / ACTION ONLY</span>
        </div>
        <section className="grid">
          <Metric title="Conflicts" value="1" label="ACTION" color="red" />
          <Metric title="Priority Email" value="1" label="LOW" color="yellow" />
          <Metric title="Travel" value="0" label="NO NEW" color="green" />
          <Metric title="Health" value="0" label="SILENT" color="green" />
          <div className="card span12"><h2>Өглөөний 30 секундийн бриф</h2><ul><li><span className="badge red">CONFLICT</span><b>10:00</b> TV9 ярилцлага нь БОХХААБХорооны хуралтай давхцаж байна.</li><li><span className="badge blue">TODAY</span>12:00 Сүрьеэ БНСУ үдийн хоол · 14:00–17:00 Чуулган.</li><li><span className="badge green">TRAVEL</span>Шинэ travel мэдээлэл байхгүй. Өмнөх ICN нислэгийг дахин харуулахгүй.</li></ul></div>
          <div className="card span6"><h2>Анхаарах 3 зүйл</h2><ol><li><b>10:00 давхцлыг шийдэх.</b></li><li><b>БОХХААБХ-д хэн оролцохыг тодруулах.</b></li><li><b>Чуулганы материал хэрэгтэй эсэхийг шалгах.</b></li></ol></div>
          <div className="card span6"><h2>Calendar</h2><table><tbody><tr><th>Цаг</th><th>Арга хэмжээ</th><th>Төлөв</th></tr><tr><td>10:00–11:00</td><td>TV9 ярилцлага</td><td><span className="badge red">Давхцал</span></td></tr><tr><td>10:00–12:00</td><td>БОХХААБХорооны хурал</td><td><span className="badge red">Давхцал</span></td></tr><tr><td>12:00–13:00</td><td>Сүрьеэ БНСУ үдийн хоол</td><td><span className="badge green">OK</span></td></tr><tr><td>14:00–17:00</td><td>Чуулган</td><td><span className="badge green">OK</span></td></tr></tbody></table></div>
          <Info title="Parliament Watch" items={['БОХХААБХ 10:00 — Calendar дээр байна.','Чуулган 14:00 — Calendar дээр байна.','Ажлын хэсэг: нэмэхээс өмнө заавал асууна.']} />
          <Info title="Gmail Priority" items={['1 invitation имэйл илэрсэн.','Travel: шинэ мэдээлэл байхгүй.','Өмнөх ICN нислэгийг дахин харуулахгүй.']} />
          <Info title="Health Intelligence" items={['Шинэ health update байхгүй.','Давтагдсан AI журам, Science Partnership, NCD Plan-г дахин харуулахгүй.']} />
        </section>
        <div className="footer">AI Office v1 Starter · Next.js 14 · Vercel ready</div>
      </main>
    </div>
  );
}

function Metric({title,value,label,color}:{title:string;value:string;label:string;color:string}) { return <div className="card span3"><h2>{title}</h2><div className="metric">{value}</div><span className={`badge ${color}`}>{label}</span></div>; }
function Info({title,items}:{title:string;items:string[]}) { return <div className="card span4"><h2>{title}</h2><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div>; }
