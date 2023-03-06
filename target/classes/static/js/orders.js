$(document).ready(function() {
    showAllOrders();
});
function showAllOrders() {
    $("#cart-list").empty();
    $.ajax({
        "url":"/orders/selectAll",
        "type":"get",
        "success":function(json) {
            if (json.state==2000){
                for(i=0;i<json.data.length;i++){
                    if(json.data[i].status=="1"){
                        json.data[i].status="待收货";
                    }else{
                        json.data[i].status="已完成"
                    }
                    let html = "<tr>"
                        + "<td><img src='"+json.data[i].image+"' class='img-responsive' style='height: 50px;width: 70px' /></td>"
                        + "<td>"+json.data[i].orderId+"</td>"
                        + "<td><input type='hidden' id='productId' value='"+json.data[i].productId+"' />"+json.data[i].title+"</td>"
                        + "<td>¥<span>"+json.data[i].price+"</span></td>"
                        + "<td>"+json.data[i].status+"</td>"
                        + "<td>"+json.data[i].ordertime+"</td>"
                        + "</tr>";
                    $("#wait_pay").append(html);
                }
            }
        }
    });
}