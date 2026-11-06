const D=window.CONQUISTA,$=(s,e=document)=>e.querySelector(s),Q=new URLSearchParams(location.search),pg=document.body.dataset.p;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>"&#"+c.charCodeAt(0)+";");
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const wa=(n,t)=>{const d=String(n||"").replace(/\D/g,"");return d?"https://wa.me/"+(d.length<=11?"55"+d:d)+(t?"?text="+encodeURIComponent(t):""):""};
const ig=h=>!h?"":/^https?:/.test(h)?h:"https://instagram.com/"+h.replace(/^@/,"");
const mp=s=>s.maps||(s.endereco?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(s.endereco+", Vitória da Conquista, BA"):"");
const brl=v=>(+v).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const hasP=p=>p!==null&&p!==undefined&&p!=="";
const catName=id=>(D.categorias.find(c=>c.id===id)||{}).nome||"";
const PAW="<ellipse cx='200' cy='200' rx='62' ry='50'/><ellipse cx='118' cy='128' rx='24' ry='32'/><ellipse cx='172' cy='88' rx='24' ry='34'/><ellipse cx='228' cy='88' rx='24' ry='34'/><ellipse cx='282' cy='128' rx='24' ry='32'/>";
const ph=t=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3d8b5f'/><stop offset='1' stop-color='#12372a'/></linearGradient></defs><rect width='400' height='300' fill='url(#g)'/><g fill='#fff' fill-opacity='.16'>${PAW}</g><text x='200' y='272' font-family='Georgia,serif' font-size='22' fill='#fff' text-anchor='middle' opacity='.85'>${esc(t)}</text></svg>`);
const NAV=[["Início","index.html","home"],["Pet shops","index.html#petshops"],["Categorias","catalogo.html","cat"],["Sobre","index.html#sobre"]];
const links=NAV.map(n=>`<a href="${n[1]}"${n[2]===pg?' class="on"':""}>${n[0]}</a>`).join("");
$("#h").innerHTML=`<div class="w bar"><a class="logo" href="index.html"><svg width="38" height="30" viewBox="0 0 400 300" aria-hidden="true"><g fill="#1f5a3f">${PAW}</g></svg>Conquista Pet</a><button id="mb" aria-label="Abrir menu">☰</button><nav id="nv">${links}</nav></div>`;
$("#mb").onclick=()=>$("#nv").classList.toggle("open");
const soc=[["Instagram",ig(D.site.instagram)],["WhatsApp",wa(D.site.whatsapp)],["E-mail",D.site.email&&"mailto:"+D.site.email]].filter(x=>x[1]);
$("#f").innerHTML=`<div class="w fg"><div><div class="logo">Conquista Pet</div><p>Guia comercial de pet shops de Vitória da Conquista, Bahia.</p></div><div><h4>Navegue</h4>${links}<a href="admin.html">Administração</a></div><div><h4>Pet shops</h4>${D.petshops.map(s=>`<a href="loja.html?l=${encodeURIComponent(s.id)}">${esc(s.nome)}</a>`).join("")}</div>${soc.length?`<div><h4>Redes sociais</h4>${soc.map(x=>`<a target="_blank" rel="noopener" href="${esc(x[1])}">${x[0]}</a>`).join("")}</div>`:""}</div><div class="w cp">© ${new Date().getFullYear()} Conquista Pet. Logotipos e marcas pertencem aos respectivos titulares.</div>`;

const shopCard=s=>`<a class="card" href="loja.html?l=${encodeURIComponent(s.id)}"><img src="${esc((s.fotos||[])[0]||ph(s.nome))}" alt="${esc(s.nome)}" loading="lazy"><div class="cb"><h3>${esc(s.nome)}</h3><p class="mut">📍 ${esc(s.bairro||"Bairro a informar")}</p><span class="btn">Conhecer loja</span></div></a>`;
const prodCard=(p,s)=>{const t=wa(s.whatsapp,`Olá! Vi no Conquista Pet o produto "${p.nome}" e gostaria de saber se está disponível.`),c=catName(p.categoria);
return `<article class="card"><img src="${esc(p.imagem||ph("Foto do produto"))}" alt="${esc(p.nome)}" loading="lazy"><div class="cb">${c?`<span class="tag">${esc(c)}</span>`:""}<h3>${esc(p.nome)}</h3>${p.descricao?`<p class="mut">${esc(p.descricao)}</p>`:""}<p class="mut sm">Loja: <a href="loja.html?l=${encodeURIComponent(s.id)}"><b>${esc(s.nome)}</b></a></p>${hasP(p.preco)?`<p class="pr">${brl(p.preco)}</p>`:""}${t?`<a class="btn wa" target="_blank" rel="noopener" href="${t}">Consultar disponibilidade</a>`:`<p class="mut sm">WhatsApp da loja não cadastrado.</p>`}</div></article>`};

function home(){
 const hero=D.site.hero?`style="background-image:linear-gradient(120deg,rgba(18,55,42,.92),rgba(31,90,63,.65)),url('${esc(D.site.hero)}')"`:"";
 $("#m").innerHTML=`<section class="hero" ${hero}><div class="w"><h1>Tudo para seu melhor amigo, em um só lugar</h1><p>Encontre pet shops de Vitória da Conquista, veja produtos e serviços e fale direto com cada loja.</p><form class="sf" action="catalogo.html"><input name="q" type="search" placeholder="Busque rações, brinquedos ou pet shops" aria-label="Pesquisar"><button class="btn">Pesquisar</button></form></div></section>
 <section class="sec" id="categorias"><div class="w"><h2>Categorias</h2><div class="g cats">${D.categorias.map(c=>`<a class="cat" href="catalogo.html?cat=${c.id}"><i>${c.icone}</i>${esc(c.nome)}</a>`).join("")}</div></div></section>
 <section class="sec alt" id="petshops"><div class="w"><h2>Pet shops em destaque</h2><div class="g">${D.petshops.filter(s=>s.destaque!==false).map(shopCard).join("")}</div></div></section>
 <section class="sec" id="como"><div class="w"><h2>Como funciona</h2><div class="g st"><div class="box"><h3>Encontre</h3><p class="mut">Pesquise por produto, categoria ou pet shop.</p></div><div class="box"><h3>Conheça a loja</h3><p class="mut">Veja endereço, horário, serviços e produtos de cada estabelecimento.</p></div><div class="box"><h3>Fale direto</h3><p class="mut">Consulte a disponibilidade pelo WhatsApp da própria loja.</p></div></div></div></section>
 <section class="sec alt" id="sobre"><div class="w"><h2>Sobre o Conquista Pet</h2><p style="max-width:70ch">O Conquista Pet é um guia comercial que reúne pet shops de Vitória da Conquista, Bahia. Cada loja tem sua própria página, e o contato e a compra são feitos diretamente com o estabelecimento: a plataforma não intermedia vendas nem pagamentos.</p></div></section>`;
}

function cat(){
 const all=D.petshops.flatMap(s=>(s.produtos||[]).map(p=>[p,s])),opt=(a,v)=>a.map(x=>`<option value="${esc(x.id)}">${esc(x[v])}</option>`).join("");
 $("#m").innerHTML=`<section class="ph"><div class="w"><h1>Catálogo</h1><p>Produtos dos pet shops de Vitória da Conquista. Filtre por categoria ou loja e consulte a disponibilidade pelo WhatsApp.</p></div></section><section class="sec"><div class="w"><form class="flt" id="fl"><input id="q" type="search" placeholder="Buscar produto ou pet shop" aria-label="Buscar" value="${esc(Q.get("q")||"")}"><select id="fc" aria-label="Categoria"><option value="">Todas as categorias</option>${opt(D.categorias,"nome")}</select><select id="fs" aria-label="Pet shop"><option value="">Todos os pet shops</option>${opt(D.petshops,"nome")}</select></form><p id="ct" class="mut" style="margin-bottom:18px"></p><div id="ls" class="g" style="margin-bottom:32px"></div><div id="pr" class="g"></div></div></section>`;
 $("#fc").value=Q.get("cat")||"";$("#fs").value=Q.get("loja")||"";
 const run=()=>{const q=norm($("#q").value.trim()),c=$("#fc").value,l=$("#fs").value;
  const sh=q?D.petshops.filter(s=>(!l||s.id===l)&&norm([s.nome,s.bairro,s.descricao,(s.servicos||[]).join(" ")].join(" ")).includes(q)):[];
  const pr=all.filter(([p,s])=>(!c||p.categoria===c)&&(!l||s.id===l)&&norm([p.nome,p.descricao,catName(p.categoria),s.nome].join(" ")).includes(q));
  $("#ls").innerHTML=sh.map(shopCard).join("");$("#pr").innerHTML=pr.map(x=>prodCard(...x)).join("");
  $("#ct").textContent=!all.length?"Ainda não há produtos cadastrados no catálogo. Enquanto isso, fale direto com os pet shops.":`${pr.length} produto(s)${sh.length?` e ${sh.length} pet shop(s)`:""} encontrado(s).`;
  if(all.length&&!pr.length&&!sh.length)$("#ct").textContent="Nenhum resultado para esses filtros.";};
 $("#fl").oninput=run;$("#fl").onsubmit=e=>e.preventDefault();run();
}

function loja(){
 const s=D.petshops.find(x=>x.id===Q.get("l"));
 if(!s)return $("#m").innerHTML=`<section class="sec"><div class="w"><h1>Pet shop não encontrado</h1><br><a class="btn" href="index.html#petshops">Ver pet shops</a></div></section>`;
 document.title=s.nome+" · Conquista Pet";
 const W=wa(s.whatsapp,"Olá! Encontrei vocês no Conquista Pet e gostaria de mais informações."),I=ig(s.instagram),M=mp(s),F=(s.fotos||[]).length?s.fotos:[ph(s.nome)],P=s.produtos||[],V=s.servicos||[];
 const ln=(k,v)=>`<div><b>${k}</b><br><span class="${v?"":"mut"}">${esc(v||"Não informado")}</span></div>`,a=(h,c,t)=>`<a class="btn ${c}" target="_blank" rel="noopener" href="${esc(h)}">${t}</a>`;
 const bt=(W?a(W,"wa","Chamar no WhatsApp"):"")+(I?a(I,"o","Ver Instagram"):"")+(M?a(M,"o","Abrir no Google Maps"):"");
 $("#m").innerHTML=`<section class="ph"><div class="w lh"><img class="lg" src="${esc(s.logo||ph(s.nome))}" alt="Logotipo ${esc(s.nome)}"><div><h1>${esc(s.nome)}</h1><p>📍 ${esc(s.bairro||"Bairro a informar")} · Vitória da Conquista, BA</p></div></div></section>
 <section class="sec"><div class="w"><div class="gal ${F.length>2?"":"one"}">${F.slice(0,3).map(f=>`<img src="${esc(f)}" alt="Foto de ${esc(s.nome)}">`).join("")}</div>
 <div class="lj"><div><h2>Sobre a loja</h2><p style="max-width:70ch">${esc(s.descricao||"Descrição ainda não cadastrada.")}</p><h2 style="margin:40px 0 20px">Serviços</h2>${V.length?`<div class="chips">${V.map(x=>`<span>${esc(x)}</span>`).join("")}</div>`:`<p class="mut">Serviços ainda não cadastrados.</p>`}</div>
 <aside class="info"><h3>Contato e localização</h3>${ln("Endereço",s.endereco)}${ln("Horário de funcionamento",s.horario)}${bt||`<p class="mut sm">Canais de contato ainda não cadastrados.</p>`}</aside></div>
 <h2 style="margin:64px 0 28px">Produtos</h2>${P.length?`<div class="g">${P.map(p=>prodCard(p,s)).join("")}</div><p style="margin-top:24px"><a class="btn o" href="catalogo.html?loja=${encodeURIComponent(s.id)}">Filtrar no catálogo</a></p>`:`<p class="mut">Esta loja ainda não tem produtos cadastrados.</p>`}</div></section>`;
}

function admin(){
 let S=JSON.parse(JSON.stringify(D)),i=0;
 const K=[["nome","Nome"],["bairro","Bairro"],["endereco","Endereço"],["horario","Horário de funcionamento"],["whatsapp","WhatsApp (DDD + número)"],["instagram","Instagram (@usuario)"],["maps","Link do Google Maps (opcional)"],["logo","Logotipo (caminho ou URL)"]];
 const fl=(k,l,v)=>`<label>${l}<input data-k="${k}" value="${esc(v)}"></label>`,ta=(k,l,v,ls)=>`<label>${l}<textarea rows="${ls?4:3}" data-k="${k}"${ls?" data-l=1":""}>${esc(ls?(v||[]).join("\n"):v)}</textarea></label>`;
 const draw=()=>{const s=S.petshops[i];
  $("#m").innerHTML=`<section class="ph"><div class="w"><h1>Administração</h1><p>Edite os dados e baixe o arquivo <b>petshops.js</b>. Esta página <b>não salva online</b> e não tem login: as mudanças só valem depois de você substituir <b>data/petshops.js</b> no projeto e publicar no GitHub. Ao recarregar, as edições não baixadas são perdidas.</p></div></section>
  <section class="sec"><div class="w ad"><div class="fl"><select id="sel" aria-label="Pet shop">${S.petshops.map((p,n)=>`<option value="${n}"${n==i?" selected":""}>${esc(p.nome||"(sem nome)")}</option>`).join("")}</select><button class="btn o" id="nw">+ Novo pet shop</button><button class="btn" id="dl">Baixar petshops.js</button></div>
  <div class="g2">${K.map(([k,l])=>fl(k,l,s[k])).join("")}</div>${ta("descricao","Descrição",s.descricao)}${ta("fotos","Fotos (um caminho ou URL por linha)",s.fotos,1)}${ta("servicos","Serviços (um por linha)",s.servicos,1)}
  <h3 style="margin:10px 0 14px">Produtos</h3>${(s.produtos||[]).map((p,n)=>`<div class="pr4"><input data-p="${n}" data-k="nome" placeholder="Nome" value="${esc(p.nome)}"><select data-p="${n}" data-k="categoria">${S.categorias.map(c=>`<option value="${c.id}"${c.id===p.categoria?" selected":""}>${esc(c.nome)}</option>`).join("")}</select><input data-p="${n}" data-k="preco" placeholder="Preço (opcional)" value="${esc(p.preco??"")}"><input data-p="${n}" data-k="imagem" placeholder="Imagem (caminho ou URL)" value="${esc(p.imagem)}"><input data-p="${n}" data-k="descricao" placeholder="Descrição" value="${esc(p.descricao)}"><button class="btn o" data-rm="${n}">Remover</button></div>`).join("")}<button class="btn o" id="ap">+ Adicionar produto</button></div></section>`};
 document.addEventListener("input",e=>{const t=e.target,s=S.petshops[i];if(t.dataset.k==null)return;
  if(t.dataset.p!=null){const p=s.produtos[t.dataset.p];p[t.dataset.k]=t.dataset.k==="preco"?(t.value.trim()===""?null:parseFloat(t.value.replace(",","."))):t.value}
  else s[t.dataset.k]=t.dataset.l?t.value.split("\n").map(x=>x.trim()).filter(Boolean):t.value});
 document.addEventListener("change",e=>{if(e.target.id==="sel"){i=+e.target.value;draw()}});
 document.addEventListener("click",e=>{const t=e.target,s=S.petshops[i];
  if(t.dataset.rm!=null){s.produtos.splice(+t.dataset.rm,1);draw()}
  else if(t.id==="ap"){(s.produtos=s.produtos||[]).push({nome:"",categoria:S.categorias[0].id,descricao:"",preco:null,imagem:""});draw()}
  else if(t.id==="nw"){const n=(prompt("Nome do novo pet shop:")||"").trim();if(!n)return;
   S.petshops.push({id:norm(n).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),nome:n,destaque:true,logo:"",fotos:[],bairro:"",endereco:"",horario:"",whatsapp:"",instagram:"",maps:"",descricao:"",servicos:[],produtos:[]});i=S.petshops.length-1;draw()}
  else if(t.id==="dl"){const b=new Blob(["window.CONQUISTA = "+JSON.stringify(S,null,2)+";\n"],{type:"text/javascript"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="petshops.js";a.click()}});
 draw();
}
({home,cat,loja,admin})[pg]?.();
