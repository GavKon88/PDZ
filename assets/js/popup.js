function openPopup(imgSrc, description) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupDesc = document.getElementById('popup-desc');

    popupImg.src = imgSrc;
    popupDesc.innerText = description;
    popup.style.display = 'flex';
}

function closePopup(event) {
    document.getElementById('popup').style.display = 'none';
}
