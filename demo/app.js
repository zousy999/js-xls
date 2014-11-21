var XLS = require('xlsjs');
var workbook = XLS.readFile('test.xls');

var sheet_name_list = workbook.SheetNames;
//var Sheet1A1 = workbook.Sheets[sheet_name_list[0]]['A1'].v;
//  console.log(workbook);
var ws = workbook.Sheets[sheet_name_list[0]];
var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var range = ws['!range'];//ȡ����ǰ�����������з�Χ range.s.r ��ʼ�� range.e.r ������
console.log(range);
for(var R = range.s.r+1;R<= range.e.r;R++){
	for(var C = range.s.c+1;C<=range.e.c;C++){
		var cell = ws[alpha[C-1]+R];
		console.log(cell.v);
	}
}