var data = new Date();

// document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());

document.write(data.toString());
document.write("<hr/>");

document.write(data.toString());
data.setDate(data.getDate() + 1); // Adicionando/subtraindo o valor da data
document.write("<hr/>");

document.write(data.toString());
data.setMonth(data.getMonth() + 1); // Adicionando/subtraindo o valor do mês
document.write("<hr/>");
