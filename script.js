'use strict';
const books = [
{title:'보왕삼매론',parts:[
'몸에 병 없기를 바라지 마라.\n몸에 병이 없으면 탐욕이 생기기 쉽나니 그래서 성인이 말씀하시되 ‘병고로써 양약을 삼으라’ 하였다.',
'세상살이에 곤란 없기를 바라지 마라.\n세상살이에 곤란이 없으면 교만하고 사치하는 마음이 생기나니, 그래서 성인이 말씀하시되 ‘근심과 곤란으로써 세상을 살아가라’ 하였다.',
'공부하는데 마음에 장애가 없기를 바라지 마라.\n마음에 장애가 없으면 배우는 것이 넘치게 되나니, 그래서 성인이 말씀하시되 ‘장애 속에서 해탈을 얻으라’ 하였다.',
'수행하는데 마 없기를 바라지 마라.\n수행하는데 마가 없으면 서원이 굳건해지지 못하나니, 그래서 성인이 말씀하시되 ‘모든 마군으로서 수행을 돕는 벗을 삼으라’ 하였다.',
'일을 함에 있어 쉽게 되기를 바라지 마라.\n일이 쉽게 이루어지면 뜻이 경솔해지기 쉽나니, 그래서 성인이 말씀하시되 ‘일의 어려움을 안락으로 삼으라’ 하였다.',
'친구를 사귀되 내가 이롭게 되기를 바라지 마라.\n내가 이롭고자 하면 의리를 상하게 되나니 그래서 성인이 말씀하시되 ‘순결로써 자본과 양식을 삼으라’ 하였다.',
'남이 내 뜻대로 순종해주기를 바라지 마라.\n남이 내 뜻대로 순종해주면 마음이 교만해지나니, 그래서 성인이 말씀하시되 ‘내 뜻에 맞지 않는 사람들로서 원림을 삼으라’ 하였다.',
'공덕을 베풀려면 과보를 바라지 마라.\n과보를 바라면 도모하는 마음을 가지게 되나니, 그래서 성인이 말씀하시되 ‘덕 베푸는 것을 헌신처럼 버리라’ 하였다.',
'이익을 분에 넘치게 바라지 마라.\n이익이 분에 넘치면 어리석은 마음이 생겨나나니, 그래서 성인이 말씀하시되 ‘적은 이익으로써 부자가 되라’ 하였다.',
'억울함을 당해서 밝히려 하지 마라.\n억울함을 밝히면 원망하는 마음을 돕게 되나니, 그래서 성인이 말씀하시되 ‘억울함을 당하는 것으로 수행하는 문을 삼으라’ 하였다.']},
{title:'주자십회',parts:[
'부모에게 효도하지 않으면 돌아가신 뒤에 뉘우친다.',
'가족에게 친하게 대하지 않으면 멀어진 뒤에 뉘우친다.',
'젊어서 부지런히 배우지 않으면 늙어서 뉘우친다.',
'편안할 때 어려움을 생각하지 않으면 실패한 뒤에 뉘우친다.',
'풍족할 때 아껴 쓰지 않으면 가난해진 뒤에 뉘우친다.',
'봄에 씨 뿌려 가꾸지 않으면 가을에 뉘우친다.',
'담장을 고치지 않으면 도둑맞은 뒤에 뉘우친다.',
'색을 삼가지 않으면 병든 뒤에 뉘우친다.',
'술에 취해 망령된 말을 하고 술 깬 뒤에 뉘우친다.',
'손님을 제대로 대접하지 않으면 떠난 뒤에 뉘우친다.']},
{title:'겸손의 기도문',parts:[
'존경받고 싶은 욕망에서 저를 해방하소서.',
'사랑받고 싶은 욕망에서, 칭찬받고 싶은 욕망에서, 인기를 얻고 싶은 욕망에서, 대우받고 싶은 욕망에서, 인정받고 싶은 욕망에서 저를 해방하소서.',
'천대받을까 두려워하는 마음에서, 업신여김 받을까 두려워하는 마음에서, 잊혀질까 두려워하는 마음에서, 조롱당할까 두려워하는 마음에서, 의심받을까 두려워하는 욕망에서 저를 해방하소서.',
'모든 이에게 모든 것이 되기 위해서 저를 해방하소서. - 메리 데빌 추기경']}];
// Each phrase identifies the lesson; shared sentence frames stay visible.
const blankPhrases = [
  [
    ['몸에 병', '몸에 병', '탐욕', '병고로써 양약'],
    ['세상살이에 곤란', '세상살이에 곤란', '교만하고 사치하는 마음', '근심과 곤란으로써 세상을 살아가라'],
    ['공부하는데 마음에 장애', '마음에 장애', '배우는 것이 넘치게', '장애 속에서 해탈'],
    ['수행하는데 마', '수행하는데 마', '서원이 굳건해지지 못하나니', '모든 마군으로서 수행을 돕는 벗'],
    ['일을 함에 있어 쉽게', '일이 쉽게 이루어지면', '뜻이 경솔해지기', '일의 어려움을 안락'],
    ['친구를 사귀되 내가 이롭게', '내가 이롭고자', '의리를 상하게', '순결로써 자본과 양식'],
    ['남이 내 뜻대로 순종해주기를', '남이 내 뜻대로 순종해주면', '마음이 교만해지나니', '내 뜻에 맞지 않는 사람들로서 원림'],
    ['공덕을 베풀려면 과보', '과보', '도모하는 마음', '덕 베푸는 것을 헌신처럼'],
    ['이익을 분에 넘치게', '이익이 분에 넘치면', '어리석은 마음', '적은 이익으로써 부자가 되라'],
    ['억울함을 당해서 밝히려', '억울함을 밝히면', '원망하는 마음', '억울함을 당하는 것으로 수행하는 문']
  ],
  [
    ['부모에게 효도하지', '돌아가신'],
    ['가족에게 친하게 대하지', '멀어진'],
    ['젊어서 부지런히 배우지', '늙어서'],
    ['편안할 때 어려움을 생각하지', '실패한'],
    ['풍족할 때 아껴 쓰지', '가난해진'],
    ['봄에 씨 뿌려 가꾸지', '가을에'],
    ['담장을 고치지', '도둑맞은'],
    ['색을 삼가지', '병든'],
    ['술에 취해 망령된 말을', '술 깬'],
    ['손님을 제대로 대접하지', '떠난']
  ],
  [
    ['존경받고'],
    ['사랑받고', '칭찬받고', '인기를 얻고', '대우받고', '인정받고'],
    ['천대받을까', '업신여김 받을까', '잊혀질까', '조롱당할까', '의심받을까'],
    ['모든 이에게 모든 것이 되기 위해서', '메리 데빌 추기경']
  ]
];
function blankSegments(text, phrases) {
  const segments = [];
  let cursor = 0;
  for (const answer of phrases) {
    const start = text.indexOf(answer, cursor);
    if (start < 0) throw new Error(`원문에 없는 빈칸 문구: ${answer}`);
    segments.push({ text: text.slice(cursor, start) }, { answer });
    cursor = start + answer.length;
  }
  segments.push({ text: text.slice(cursor) });
  return segments;
}
const $=s=>document.querySelector(s),KEY='moral-lingo-v1';
let state={book:0,part:0,mode:'read',blankRound:0,showHints:false,done:{},drafts:{}};
try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved&&typeof saved==='object'){if(Number.isInteger(saved.book)&&books[saved.book])state.book=saved.book;if(Number.isInteger(saved.part)&&books[state.book].parts[saved.part])state.part=saved.part;if(['read','blank','write','all'].includes(saved.mode))state.mode=saved.mode;if(Number.isInteger(saved.blankRound)&&saved.blankRound>=0&&saved.blankRound<=1)state.blankRound=saved.blankRound;if(typeof saved.showHints==='boolean')state.showHints=saved.showHints;for(const key of ['done','drafts'])if(saved[key]&&typeof saved[key]==='object')state[key]=saved[key];}}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{$('#storage').textContent='브라우저에서 저장이 제한돼요. 현재 화면에서는 계속 연습할 수 있어요.';}}
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function btn(text,fn,cls){const b=el('button',text,cls);b.onclick=fn;return b;}
function partButton(index,active,done,fn){
const b=el('button',undefined,`part-card${active?' active':''}`);
b.onclick=fn;
b.setAttribute('aria-label',`${index+1}번 암기 카드${done?' 완료':''}`);
b.append(el('span',String(index+1).padStart(2,'0'),'part-number'),el('span',done?'완료':'연습','part-status'));
return b;
}
const key=()=>`${state.book}-${state.part}`,draftKey=()=>state.mode==='all'?`${state.book}-all`:key();
const norm=s=>s.normalize('NFC').replace(/[\s\p{P}]/gu,'');
const CHOSEONG='ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
function initialHint(text){
return Array.from(text).map(char=>{const code=char.charCodeAt(0)-44032;return code>=0&&code<11172?CHOSEONG[Math.floor(code/588)]:char;}).join('');
}
function splitAnswer(answer){
const match=answer.trim().match(/^(\S+)(?:\s+(.+))?$/);
return match?(match[2]?[match[1],match[2]]:[match[1]]):[answer];
}
function blankedParts(answer,round){
const parts=splitAnswer(answer),blankIndex=Math.min(round,parts.length-1);
return parts.map((text,index)=>({text,blank:index===blankIndex}));
}
function target(){return state.mode==='all'?books[state.book].parts.map((p,i)=>(state.book<2?`${i+1}. `:'')+p).join('\n\n'):books[state.book].parts[state.part];}
function switchMode(mode){state.mode=mode;save();render();}
function render(){
const book=books[state.book];
$('#books').replaceChildren(...books.map((b,i)=>{const n=btn(b.title,()=>{state.book=i;state.part=0;state.blankRound=0;save();render();},i===state.book?'active':'');n.setAttribute('aria-pressed',i===state.book);return n;}));
$('#parts').replaceChildren(...book.parts.map((_,i)=>{const done=state.done[`${state.book}-${i}`]===true;const n=partButton(i,i===state.part,done,()=>{state.part=i;state.blankRound=0;if(state.mode==='all')state.mode='read';save();render();});if(i===state.part)n.setAttribute('aria-current','step');return n;}));
const count=books.reduce((sum,b,i)=>sum+b.parts.filter((_,j)=>state.done[`${i}-${j}`]===true).length,0);$('#progress').textContent=`암기 완료 ${count} / 24` ;$('#bar').value=count;
$('#title').textContent=`${book.title} · ${state.mode==='all'?'전체 백지 쓰기':`암기 카드 ${String(state.part+1).padStart(2,'0')}`}`;$('#count').textContent=state.mode==='all'?'전체 연습':`${String(state.part+1).padStart(2,'0')} / ${book.parts.length}`;
$('#modes').replaceChildren(...[['read','① 읽기'],['blank','② 빈칸 연습'],['write','③ 안 보고 쓰기'],['all','전체 백지 쓰기']].map(([m,t])=>{const n=btn(t,()=>switchMode(m),m===state.mode?'active':'');n.setAttribute('aria-pressed',m===state.mode);return n;}));
$('#prev').disabled=state.part===0||state.mode==='all';$('#next').disabled=state.part===book.parts.length-1||state.mode==='all';$('#done').checked=state.done[key()]===true;$('#done').disabled=state.mode==='all';$('#content').replaceChildren();$('#feedback').replaceChildren();
if(state.mode==='read'){$('#instruction').textContent='소리 내어 읽고, 한 문장씩 떠올려 보세요.';$('#content').append(el('div',target(),'passage'),btn('빈칸으로 확인하기 →',()=>switchMode('blank'),'primary actions'));}
else if(state.mode==='blank')blanks();else writing();
}
function blanks(){
$('#instruction').textContent=`${state.blankRound+1}번 빈칸 연습이에요. 같은 핵심 구절을 앞부분과 뒷부분으로 나눠 외워요.`;
const controls=el('div',undefined,'practice-controls');
controls.append(...[0,1].map(i=>{const n=btn(`${i+1}번 연습`,()=>{state.blankRound=i;save();render();},i===state.blankRound?'active':'');n.setAttribute('aria-pressed',i===state.blankRound);return n;}));
const toggle=el('label',undefined,'toggle');const check=el('input');check.type='checkbox';check.checked=state.showHints;check.onchange=e=>{state.showHints=e.target.checked;save();render();};toggle.append(check,document.createTextNode(' 초성 힌트'));
controls.append(toggle);
const p=el('div',undefined,'passage'),inputs=[];
blankSegments(target(),blankPhrases[state.book][state.part]).forEach(segment=>{if(segment.answer){blankedParts(segment.answer,state.blankRound).forEach((piece,index)=>{if(!piece.blank){p.append(document.createTextNode((index>0?' ':'')+piece.text+(index===0?' ':'')));return;}const wrap=el('span',undefined,'blank-wrap');const input=el('input',undefined,'blank');input.type='text';input.autocomplete='off';input.placeholder=`${inputs.length+1}`;input.style.width=`${Math.max(70,Math.min(360,piece.text.length*18+42))}px`;input.dataset.answer=piece.text;input.setAttribute('aria-label',`${inputs.length+1}번째 핵심 내용 빈칸${state.showHints?`, 초성 ${initialHint(piece.text)}`:''}`);wrap.append(input);if(state.showHints)wrap.append(el('span',initialHint(piece.text),'hint'));inputs.push(input);p.append(wrap);});}else p.append(document.createTextNode(segment.text));});
const actions=el('div',undefined,'actions');actions.append(btn('답 확인',()=>{let count=0;inputs.forEach(n=>{const ok=norm(n.value)===norm(n.dataset.answer);n.classList.toggle('correct',ok);n.classList.toggle('wrong',!ok);if(ok)count++;});$('#feedback').textContent=`${inputs.length}개 중 ${count}개 정답이에요.`;},'primary'),btn('정답 보기',()=>{inputs.forEach(n=>{n.value=n.dataset.answer;n.classList.remove('wrong','correct');});$('#feedback').textContent='정답을 확인했어요. 다시 연습해서 기억을 확인해 보세요.';}),btn('다시 연습',render),btn(state.blankRound===0?'2번 연습 →':'안 보고 쓰기 →',()=>{if(state.blankRound===0){state.blankRound=1;save();render();}else switchMode('write');}));$('#content').append(controls,p,actions);
}
function compare(expected,actual){const a=Array.from(norm(expected)),b=Array.from(norm(actual)),rows=Array.from({length:a.length+1},()=>new Uint16Array(b.length+1));for(let i=0;i<=a.length;i++)rows[i][0]=i;for(let j=0;j<=b.length;j++)rows[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));let i=a.length,j=b.length;const result=[];while(i||j){if(i&&j&&rows[i][j]===rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1)){result.push({type:a[i-1]===b[j-1]?'same':'change',a:a[--i],b:b[--j]});}else if(i&&rows[i][j]===rows[i-1][j]+1){result.push({type:'missing',a:a[--i]});}else result.push({type:'extra',b:b[--j]});}return{distance:rows[a.length][b.length],length:Math.max(a.length,b.length),result:result.reverse()};}
function writing(){
$('#instruction').textContent=state.mode==='all'?'선택한 글 전체를 순서대로 쓰세요. 번호도 입력하고, 제목은 생략하세요.':'원문을 보지 않고 이 부분을 써 보세요. 공백과 문장부호는 비교에서 제외해요.';
const expected=target(),area=el('textarea');area.setAttribute('aria-label','암기 답안');area.placeholder='기억나는 문장을 여기에 써 보세요…';area.maxLength=6000;area.value=typeof state.drafts[draftKey()]==='string'?state.drafts[draftKey()]:'';area.oninput=()=>{state.drafts[draftKey()]=area.value;save();$('#feedback').replaceChildren();};
const actions=el('div',undefined,'actions');actions.append(btn('원문과 비교',()=>{if(!norm(area.value)){$('#feedback').textContent='먼저 답안을 입력해 주세요.';return;}const c=compare(expected,area.value);$('#feedback').replaceChildren(el('p',c.distance===0?'정확해요! 공백과 문장부호를 제외한 내용이 원문과 일치해요.':`원문 일치도 ${Math.max(0,Math.round((1-c.distance/c.length)*100))}%`));if(c.distance){$('#feedback').append(el('p','주황색: 빠졌거나 다른 원문 글자 · 취소선: 추가되거나 다르게 쓴 글자'));const diff=el('div',undefined,'diff');c.result.forEach(r=>{if(r.type==='same')diff.append(document.createTextNode(r.a));else{if(r.a)diff.append(el('mark',r.a));if(r.b)diff.append(el('del',r.b));}});$('#feedback').append(diff);}},'primary'),btn('첫 글자 힌트',()=>{$('#feedback').textContent=expected.split(/(\s+)/).map(w=>Array.from(w).map((c,i)=>i===0||!/[가-힣A-Za-z0-9]/.test(c)?c:'○').join('')).join('');}),btn('답안 지우기',()=>{if(area.value&&!confirm('현재 연습의 답안을 지울까요?'))return;area.value='';state.drafts[draftKey()]='';save();$('#feedback').replaceChildren();area.focus();}));const details=el('details');details.append(el('summary','원문 펼쳐 보기'),el('div',expected,'passage'));$('#content').append(area,actions,details);
}
$('#prev').onclick=()=>{if(state.part>0){state.part--;state.blankRound=0;save();render();}};$('#next').onclick=()=>{if(state.part<books[state.book].parts.length-1){state.part++;state.blankRound=0;save();render();}};$('#done').onchange=e=>{state.done[key()]=e.target.checked;save();render();};$('#clear-cache').onclick=()=>{if(!confirm('저장된 진도와 답안을 모두 삭제할까요?'))return;localStorage.removeItem(KEY);state={book:0,part:0,mode:'read',blankRound:0,showHints:false,done:{},drafts:{}};$('#storage').textContent='저장된 데이터를 삭제했어요.';render();};render();
