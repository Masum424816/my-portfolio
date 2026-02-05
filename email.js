(function() {
    emailjs.init("d4upA02PpPiHj_ixD");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // বাটন টেক্সট চেঞ্জ (Loading state)
    const btn = event.target.querySelector('button');
    btn.innerText = 'Sending...';

    const templateParams = {
        from_name: event.target.from_name.value,
        from_email: event.target.from_email.value,
        message: event.target.message.value
    };




    emailjs.send('service_2c84l41', 'template_l3gxx8r', templateParams)
        .then(() => {
            alert('Message Sent Successfully!');
            btn.innerText = 'Send';
            this.reset();
        }, (error) => {
            alert('Failed to send... ' + JSON.stringify(error));
        });


});