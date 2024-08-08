function copyEmail() {
    const emailText = document.getElementById('emailTooltip').textContent;
    navigator.clipboard.writeText(emailText).then(() => {
        alert('Email copiado: ' + emailText);
    }, (err) => {
        console.error('Erro ao copiar o email: ', err);
    });
}