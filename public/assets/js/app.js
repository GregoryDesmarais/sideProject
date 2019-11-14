$("#submit").click(function(event){
    event.preventDefault();
    let cab = {};
    cab.site = $("#site").val();
    cab.location = $("#location").val();
    cab.customerName = $("#customer").val();
    cab.power = [];
    if($("#pduA").val().length > 0)
    {
        let power = {};
        power.pdu = $("#pduA").val();
        power.panel = $("#panelA").val();
        power.breaker1 = $("#breaker1A").val();
        if($("#breaker2A").val().length > 0)
        {
            power.breaker2 = $("#breaker2A").val();
        }
        if($("#breaker3A").val().length > 0)
        {
            power.breaker3 = $("#breaker3A").val();
        }
        power.recepticle = $("#receptacleA").val();
        cab.power.push(power);
    }
    if($("#pduB").val().length > 0)
    {
        let power = {};
        power.pdu = $("#pduB").val();
        power.panel = $("#panelB").val();
        power.breaker1 = $("#breaker1B").val();
        if($("#breaker2B").val().length > 0)
        {
            power.breaker2 = $("#breaker2B").val();
        }
        if($("#breaker3B").val().length > 0)
        {
            power.breaker3 = $("#breaker3B").val();
        }
        power.recepticle = $("#receptacleB").val();
        cab.power.push(power);
    }
    console.log(cab);
    $.ajax({
        method: "POST", 
        url: "/add",
        data: cab
    }).then(function(data){
        console.log(data);
    })
});