$("#submit").click(function(event){
    event.preventDefault();
    let circuit = {};
    circuit.site = $("#site").val();
    circuit.location = $("#location").val();
    circuit.customerName = $("#customer").val();
    circuit.receptacle = $("#receptacle").val();
    circuit.pdu = $("#pdu").val();
    circuit.panel = $("#panel").val();
    circuit.breaker1 = $("#breaker1").val();
    if($("#breaker2").val().length > 0)
        {
            circuit.breaker2 = $("#breaker2").val();
        }
    if($("#breaker3").val().length > 0)
        {
            circuit.breaker3 = $("#breaker3").val();
        }
    
    console.log(circuit);
    $.ajax({
        method: "POST", 
        url: "/add",
        data: circuit
    }).then(function(data){
        console.log(data);
        $(".form-control").val("");
    }).catch(function(err){
        console.log(err)
    })
});