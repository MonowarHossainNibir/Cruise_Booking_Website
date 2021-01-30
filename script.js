//First Class Ticket Handling Section
document.getElementById("first-class-increase").addEventListener("click", function(){
    firstClassTicketHandling(true);
});

document.getElementById("first-class-decrease").addEventListener("click", function(){
    firstClassTicketHandling(false);
});
function firstClassTicketHandling(isIncrease){
    const firstClassTicket = document.getElementById("first-class-count");
    const firstClassTicketCount = parseFloat(firstClassTicket.value);
    let totalFirstClassTicket = firstClassTicketCount;
    if(isIncrease == true){
        totalFirstClassTicket = firstClassTicketCount + 1;
    }
    if(isIncrease == false && firstClassTicketCount>0){
        totalFirstClassTicket = firstClassTicketCount - 1;
    }
    firstClassTicket.value = totalFirstClassTicket;
    calculateTotal();
}


//Economy Class Ticket Handling Section
document.getElementById("economy-class-increase").addEventListener("click", function(){
    economyClassTicketHandling(true);
});

document.getElementById("economy-class-decrease").addEventListener("click", function(){
    economyClassTicketHandling(false);
});
function economyClassTicketHandling(isIncrease){
    const economyClassTicket = document.getElementById("economy-class-count");
    const economyClassTicketCount = parseFloat(economyClassTicket.value);
    let totalEconomyClassTicket = economyClassTicketCount;
    if(isIncrease == true){
        totalEconomyClassTicket = economyClassTicketCount + 1;
    }
    if(isIncrease == false && economyClassTicketCount>0){
        totalEconomyClassTicket = economyClassTicketCount - 1;
    }
    economyClassTicket.value = totalEconomyClassTicket;
    calculateTotal();
}


// Calculate The Total Amount
function calculateTotal(){
    const firstClassTicket = document.getElementById("first-class-count");
    const firstClassTicketCount = parseFloat(firstClassTicket.value);

    const economyClassTicket = document.getElementById("economy-class-count");
    const economyClassTicketCount = parseFloat(economyClassTicket.value);

    const subTotalAmount = firstClassTicketCount*150 + economyClassTicketCount*100;
    document.getElementById("subtotal-amount").innerText = subTotalAmount;

    const totalVat = subTotalAmount* 0.1;
    document.getElementById("vat").innerText = totalVat;

    const totalAmount = subTotalAmount + totalVat;
    document.getElementById("total-amount").innerText = totalAmount;
}


//Booking Button Handling Section
document.getElementById("booking-btn").addEventListener("click", function(){
    if(document.getElementById("total-amount").innerText<=0){
        alert("You need to add at list one ticket");
    }
    else{
        const bookingBtn = document.getElementById("booking-btn");
        bookingBtn.style.display = "none";

        const confirmation = document.getElementById("confirm");
        confirmation.style.display = "block";
    }
});