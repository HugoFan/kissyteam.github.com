KISSY.ready(function(){
	
	KISSY.use("switchable,data/widget,data/tools", function(S,Switchable,widget,tools){
		var $=S.all;

		var tab = new Switchable.Tabs("#content",{
			aria:false,
			triggerType:"click",
			switchTo:~location.href.indexOf("tools")?1:0
		});

		
		
		(function(){
			var nav ='', content='';
			S.each(widget, function(item){
				nav += '<li><a target="_self" href="#'+item.name+'">'+item.name+'</a><p>'+item.title+'</p></li>';
				content += '<a  name="'+item.name+'"></a>';
				content +=  '<dl class="list">';
				content +=  '<dt><a href="'+item.href+'">'+item.name+'</a></dt>';
				content +=  '<dd class="img"><a href="'+item.href+'"><img src="'+item.pic+'" alt="'+item.name+'"/></a></dd>';
				content +=  '<dd class="url"><label>������ַ��</label>  <a href="'+item.href+'">'+item.href+'</a></dd>';
				content +=  '<dd class="version"><label>�Ƽ��汾��</label> '+item.version+'</dd>';
				content +=  '<dd class="reason"><label>�Ƽ����ɣ�</label>   '+item.reason+'</dd>';
				content +=  '<dd class="intro"><label>�����飺</label>  '+item.intro+'</dd>';
				content +=  '</dl>';
			})
			$("#nav-widget ul").html(nav);
			$("#content-widget").html(content);
		})();
		

		(function(){
			var nav ='', content='';
			S.each(tools, function(item){
				nav += '<li><a target="_self" href="#'+item.name+'">'+item.name+'</a><p>'+item.title+'</p></li>';
				content += '<a name="'+item.name+'"></a>';
				content +=  '<dl class="list">';
				content +=  '<dt><a href="'+item.href+'">'+item.name+'</a></dt>';
				content +=  '<dd class="url"><label>������ַ��</label>  <a href="'+item.href+'">'+item.href+'</a></dd>';
				content +=  '<dd class="intro"><label>�����飺</label>  '+item.intro+'</dd>';
				content +=  '</dl>';
			})
			$("#nav-tools ul").html(nav);
			$("#content-tools").html(content);
		})();

	})
	
	
});



KISSY.add("data/widget", function(){

	return [{
		"name": "SWFUpload",
		"title": "Flash�ļ��ϴ����",
		"pic": "http://img04.taobaocdn.com/tps/i4/T1lvqDXdVDXXXXXXXX-120-120.png",
		"href": "http://swfupload.org/",
		"version": "v2.2.0.1 ",
		"reason": "֧�������ϴ���֧�ָ����¼�ע�ᣬdemo�ḻ",
		"intro": "SWFUpload ��һ��С��ʵ�õ�JavaScript/Flash�ļ��ϴ������������һ��������ͬʱѡ�����ļ��ϴ��������¼����������ӻص��������������ļ��ϴ�֮ǰ��ȡ�ļ���Ϣ������ʹ��xhtml,css�����ϴ��ؼ�����ʽ������ʹ��xhtml,css��ʾ�ϴ�״̬��Ϣ������ˢ��ҳ�棬ȫ�����ǡ��첽����ֻҪ��������֧��flash�Ϳ���ʹ�á�����ʹ��js,flash����ҳҲ�����Ž��������ϴ�֮ǰ�����ڿͻ���У���ļ���С�����Զ�����Ҫ�ϴ����ļ����͡��ϴ�֮ǰ���������ϴ������е��ļ����ϴ��е��ļ���ʵҲ����ȡ����"
	},{
		"name": "Highcharts",
		"title": "ͼ��ؼ�",
		"pic": "http://img01.taobaocdn.com/tps/i1/T1SLGDXgBBXXXXXXXX-120-120.png",
		"href": "http://www.highcharts.com/",
		"version": "2.1.9",
		"reason": "��ѻ�����Ŷ�ס�",
		"intro": " Highcharts��һ�����ű�ʵ�ֵı��ؼ������Ը����webӦ������ֻ�ܵ�ͼ��Highcharts�ṩ�ḻ��ͼ����ʽ������ line, spline, area, areaspline, column, bar, pie and scatter��ʵ���ǾӼ����У�ɱ�����֮�ر��ؼ���"
	},{
		"name": "zeroclipboard",
		"title": "flash������",
		"pic": "http://img01.taobaocdn.com/tps/i1/T10yiDXfRkXXXXXXXX-120-120.png",
		"href": "http://code.google.com/p/zeroclipboard/",
		"version": " 2.1.9",
		"reason": "flashʵ�ֵļ����塣",
		"intro": "Provides 'Copy to Clipboard' functionality for your web site using JavaScript and Flash"
	},{
		"name": "xml_to_json",
		"title": "xml to json",
		"pic": "http://img02.taobaocdn.com/tps/i2/T1Og1DXolsXXXXXXXX-120-120.png",
		"href": "http://www.thomasfrank.se/xml_to_json.html",
		"version": "1.1",
		"reason": "�ܿ죬��С�������棬������ô�����ù���֪����",
		"intro": "��XMLת��ΪJSON��"
	},{
		"name": "Blowfish",
		"title": "����/����",
		"pic": "http://img03.taobaocdn.com/tps/i3/T1nd1DXhhMXXXXXXXX-137-140.jpg",
		"href": "http://dren.ch/js_blowfish/",
		"version": "v1",
		"reason": "���úܷ���(��֧������) ",
		"intro": "������blowfish���ܽ����㷨��javascript�档"
	},{
		"name": "SyntaxHighlighter",
		"title": "�﷨����",
		"pic": "http://img02.taobaocdn.com/tps/i2/T1qwmFXn8aXXXXXXXX-120-120.png",
		"href": "http://alexgorbatchev.com/SyntaxHighlighter/",
		"version": "3.0.83",
		"reason": "�����󣬹���ȫ��������չ",
		"intro": "Javascript�﷨���������"
	},{
		"name": "LESSCSS",
		"title": "CSS��� ^^",
		"pic": "http://img02.taobaocdn.com/tps/i2/T1tLaFXeNfXXXXXXXX-120-120.png",
		"href": "http://lesscss.org/ ",
		"version": "1.1.5",
		"reason": "��д����һ��дCSS��<font color=red>������Ҫ��ǽ</font>����ֱ�ӷ���<a href='http://www.lesscss.net/'>LESS������</a>",
		"intro": "LESS �� CSS �����˶�̬���Ե����ԣ��� ������ �̳У� ���㣬 ����. LESS �ȿ����� �ͻ��� ������ (֧��IE 6+, Webkit, Firefox)��Ҳ��һ�ڷ�������� (���� Node.js). "
	}];

});






KISSY.add("data/tools", function(){

	return [{
			"name": "KISSY Html Beautifier and Minifier",
			"title": "KISSY��Html����ѹ������",
			"pic": "",
			"href": "http://docs.kissyui.com/kissy/src/htmlparser/demo.html",
			"version": "",
			"reason": "����д��",
			"intro": "KISSY���߳���д��Html������ѹ������"
		},{
			"name": "KISSY Module Compiler",
			"title": "KISSYģ�������ϲ�����",
			"pic": "",
			"href": "http://docs.kissyui.com/",
			"version": "",
			"reason": "",
			"intro": "KISSYģ�������ϲ�����"
		},{
			"name": "YUI Compressor",
			"title": "����ѹ��",
			"pic": "#",
			"href": "http://developer.yahoo.com/yui/compressor/",
			"version": "",
			"reason": "",
			"intro": "CSSѹ��"
		},{
			"name": "JsDoc Toolkit:",
			"title": "JS�ĵ�����",
			"pic": "#",
			"href": "http://code.google.com/p/jsdoc-toolkit/",
			"version": "",
			"reason": "",
			"intro": "���ݴ���ע�������ĵ������Զ����ĵ�ģ����."
		},{
			"name": "Ant",
			"title": "ģ����",
			"pic": "#",
			"href": "http://ant.apache.org/",
			"version": "",
			"reason": "",
			"intro": "�Զ����á��������Ȼ����������Щ�����๦��������Լ�ȥ�ھ�"
		},{
			"name": "iDebug",
			"title": "���Թ���",
			"pic": "#",
			"href": "#",
			"version": "",
			"reason": "",
			"intro": "ҳ�����"
		},{
			"name": "CSSEmbed",
			"title": "ͼƬתDataURI",
			"pic": "#",
			"href": "",
			"version": "",
			"reason": "",
			"intro": "ͼƬתDataURI"
		},{
			"name": "ConvertZ",
			"title": "����ת��",
			"pic": "#",
			"href": "",
			"version": "",
			"reason": "",
			"intro": "����ת��"
		},{
			"name": "PNGOut",
			"title": "PNG�Ż�",
			"pic": "#",
			"href": "",
			"version": "",
			"reason": "",
			"intro": "PNG�Ż�"
		},{
			"name": "csslint",
			"title": "css���",
			"pic": "#",
			"href": "http://csslint.net/",
			"version": "",
			"reason": "",
			"intro": "һ�����߼����css����Ĺ���"
		},{
			"name": "JPEG & PNG Stripper",
			"title": "ͼƬ�Ż�",
			"pic": "#",
			"href": "http://www.steelbytes.com/?mid=30",
			"version": "",
			"reason": "",
			"intro": "A tool for stripping/cleaning/removing uncessary metadata (junk) from JPG/JPEG/JFIF & PNG files. The image quality IS NOT AFFECTED. Includes command line support. Just specify a folder or file on the commandline (wildcards allowed)"
		},{
			"name": "��������loading",
			"title": "��������loadingͼƬ",
			"pic": "#",
			"href": "http://preloaders.net/",
			"version": "",
			"reason": "",
			"intro": "������ʽ���ɶ��ƴ�С���ٶȵȣ��Ӵ���Ҳ���õ����Ҳ����õľջ���"
		},{
			"name": "ASCII Generator",
			"title": "��������ascii�ַ�ͼ",
			"pic": "",
			"href": "http://www.network-science.de/ascii/",
			"version": "",
			"reason": "",
			"intro": "��������ascii�ַ�ͼ�����Ƶ���Ĵ������棬��˵�е�װ13������"
		},{
			"name": "����ѹ��jpgͼƬ",
			"title": "����ͼƬѹ��",
			"pic": "",
			"href": "http://www.jpegmini.com/main/home",
			"version": "",
			"reason": "",
			"intro": "��������ѹ�����ͼƬ��ѹ�����ܴﵽ50%���ϡ�"
		},{
			"name": "Base64 converter for embeded URI Images",
			"title": "תDataURI",
			"pic": "",
			"href": "http://www.abluestar.com/utilities/encode_base64/index.php",
			"version": "",
			"reason": "",
			"intro": "���߰����ͼƬ�����BASE64"
		},{
			"name": "����css3��ʽ����",
			"title": "css3��������",
			"pic": "",
			"href": "http://css3please.com/",
			"version": "",
			"reason": "",
			"intro": "������ѧcss3���ǲ�ס��Щ���Ժ����֣��������������õ�ѡ��"
		},{
			"name": "DynaTrace AJAX",
			"title": "���ܷ���",
			"pic": "",
			"href": "http://www.dynatrace.com/en/",
			"version": "",
			"reason": "",
			"intro": "DynaTrace AJAX��һ��������IE������µ����ҳ�����ܷ������ߣ�������֧��������IE6��IE7��IE8���������������DynaTraceΪ����ǰ�����ܷ�������������ġ�������������������ҳ����Ⱦʱ�䡢DOM����ִ��ʱ�䣬�������Կ���JS����Ľ���ʱ�䡣��JQuery�Ĵ�ʼ�� John Resig Ҳ�����Ƽ���һ�ѡ�"
		},{
			"name": "FastStone Capture",
			"title": "ǰ�˸���С����",
			"pic": "",
			"href": "http://www.faststone.org/",
			"version": "",
			"reason": "",
			"intro": "FastStone Capture��һ�����򵥵���Ļץͼ�����������ץȡĳ�����ڻ��߶����ͼƬ��Ҳ����ȫ�������Ծ���ģʽץͼ���������԰����ֻ��������״ץͼ����������֧�ָ��������ȼ���������С�����á�����ע�͡���ӡ�Լ��ʼ����͵ȹ��ܡ�֧�ְ���BMP��JPEG��JPEG 2000��GIF��PNG��PCX��TIFF��WMF��ICO��TGA���ڵ���������ͼƬ��ʽ������еĹ⻬��ë�̴�������ͼƬ�����������ṩ���š���ת�����С���ɫ�������ܡ�ֻҪ�������������ץȡ��Ļ�ϵ��κζ�����֧���Ϸţ�����ֱ�Ӵ�ϵͳ������������������е���ͼƬ���ղؼй��������ܸ��õ��ռ����ྫ��ͼƬ��"
		},{
			"name": "IETester",
			"title": "��汾IE",
			"pic": "",
			"href": "http://ietester.com/",
			"version": "",
			"reason": "",
			"intro": "IETester ����5���汾��IE��5.5/6.0/7.0/8.0/9.0 Preview������ȫ��������� IE �����ԵĲ��ԡ���ֵ�����ѵ��ǣ���ʱ�������ⲻ���ף�����װ������á���"
		},{
			"name": "IE Sieve",
			"title": "E�ڴ�й©���",
			"pic": "",
			"href": "http://home.wanadoo.nl/jsrosman/",
			"version": "",
			"reason": "",
			"intro": "IE�ڴ�й©��⹤�ߡ�"
		},{
			"name": "js-beautify",
			"title": "��������",
			"pic": "",
			"href": "http://jsbeautifier.org/",
			"version": "",
			"reason": "�ܸ�ʽ��JSON,ѹ������js����",
			"intro": "Beautify, unpack or deobfuscate JavaScript, make JSON/JSONP readable, etc.."
		},{
			"name": "jsfiddle",
			"title": "��Žű�Ƭ��",  
			"pic": "",
			"href": "http://jsfiddle.net/",
			"version": "",
			"reason": "",
			"intro": "��������һЩ�򵥵�demo�������ߵ��Ի���������ġ�"
		},{
			"name": "Network Delay Simulator",
			"title": "������ģ�⹤��",  
			"pic": "",
			"href": "http://www.akmalabs.com/home.php",
			"version": "",
			"reason": "",
			"intro": "������ģ�⹤�ߡ�"
		},{
			"name": "browserstack",
			"title": "���߶����������",  
			"pic": "",
			"href": "http://www.browserstack.com/user/dashboard",
			"version": "",
			"reason": "",
			"intro": "���߶����������"
		},{
			"name": "spritecow",
			"title": "sprite����",  
			"pic": "",
			"href": "http://www.spritecow.com/",
			"version": "",
			"reason": "",
			"intro": "���������������"
		}];

});




/*

,{
			"name": "",
			"pic": "",
			"href": "",
			"version": "",
			"reason": "",
			"intro": ""
		}

*/
