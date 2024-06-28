async function kalibrasi() {
    const volumeTangki = document.getElementById('volumeTangki').value;
    const waktuKalibrasi = document.getElementById('waktuKalibrasi').value;
    
    if (!volumeTangki || !waktuKalibrasi) {
        document.getElementById('hasil').innerText = 'Data tidak lengkap';
        return;
    }
    
    const hasilKalibrasi = (volumeTangki / waktuKalibrasi) * 3.6;
    document.getElementById('hasil').innerText = `Hasil Kalibrasi: ${hasilKalibrasi} L/h`;
}
