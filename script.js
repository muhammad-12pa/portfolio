$(function(){
var pages=[['index.html','Home'],['projects.html','Projects'],['resume.html','Resume'],['biodata.html','Bio-data'],['contact.html','Contact']];
var cur=location.pathname.split('/').pop()||'index.html';
var nav=pages.map(function(p){return '<a class="l" href="'+p[0]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join('');
$('body').prepend('<a class="skip" href="#main">Skip to content</a><header class="top"><div class="wrap bar"><a class="logo" href="index.html"><i></i>M. Abdul Jaleel</a><button class="menu" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Main">'+nav+'<span id="ind"></span><button class="tbtn" id="th" aria-label="Switch colour theme">Theme</button></nav></div></header>');
$('body').append('<footer><div class="wrap"><span class="mono">Muhammad Abdul Jaleel, PA College of Engineering</span><span class="mono">muhammad2006aj@gmail.com</span></div></footer>');
try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}
$('#th').on('click',function(){var d=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=d;try{localStorage.setItem('theme',d)}catch(e){}});
$('.menu').on('click',function(){var o=$('#nav').toggleClass('open').hasClass('open');$(this).attr('aria-expanded',o)});
var $i=$('#ind');function mv($a){if(!$a.length)return;$i.css({left:$a.position().left,width:$a.outerWidth()})}
function home(){mv($('nav a[aria-current=page]'))}home();$(window).on('resize load',home);
$('nav a.l').on('mouseenter focus',function(){mv($(this))}).on('mouseleave blur',home);
var els=$('.rv');if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});els.each(function(){io.observe(this)})}else els.addClass('in');
var info={ui:['Browser UI','Pages from the templates and static folders (HTML, CSS, JS). The user enters a job post or message to check.'],app:['Flask app (app.py)','Receives the request, passes the text to the trained model and returns the prediction to the page.'],model:['Trained models','Trained in notebooks/train_model.ipynb and saved in the model folder. Loaded by the Flask app.'],chat:['Chatbot (chatbot.py)','Handles the chat part of the project. <span class="ph">ADD: what it answers</span>'],exp:['Explainer (explain.py)','Shows why a post was flagged. LIME and SHAP are planned for this part. <span class="ph">ADD: current status</span>'],host:['Render hosting','The Flask site is deployed on Render and tested on a phone browser.']};
$('.node').on('click keydown',function(e){if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ')return;e.preventDefault();var k=$(this).data('k');$('.node').removeClass('on').attr('aria-pressed','false');$(this).addClass('on').attr('aria-pressed','true');$('#nd').html('<h3>'+info[k][0]+'</h3><p>'+info[k][1]+'</p>')});
var use={Python:['app','model','chat','exp'],Flask:['app'],'HTML / CSS / JS':['ui'],Jupyter:['model'],'scikit-learn':['model'],LIME:['exp'],SHAP:['exp'],Render:['host']};
$('.stack .chip').on('click',function(){var on=$(this).attr('aria-pressed')==='true';$('.stack .chip').attr('aria-pressed','false').removeClass('dim');$('.node').removeClass('on');if(on)return;$(this).attr('aria-pressed','true');$('.stack .chip').not(this).addClass('dim');(use[$(this).text()]||[]).forEach(function(k){$('.node[data-k='+k+']').addClass('on')})});
$('#pr').on('click',function(){window.print()});
$('#cf').on('submit',function(e){e.preventDefault();location.href='mailto:muhammad2006aj@gmail.com?subject='+encodeURIComponent('Portfolio message from '+$('#n').val())+'&body='+encodeURIComponent($('#m').val());$('#cs').text('Your email app should open with the message ready to send.')});
});
