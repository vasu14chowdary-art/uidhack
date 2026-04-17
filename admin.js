document.addEventListener("DOMContentLoaded", function () {

    let registrations = JSON.parse(localStorage.getItem("registered")) || [];

    let list = document.getElementById("regList");

    list.innerHTML = "";

    if (registrations.length === 0) {
        list.innerHTML = "<li>No registrations yet</li>";
        return;
    }

    registrations.forEach((r) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${r.title}</strong> - ${r.date} <br>
            ${r.desc} <br>
            Capacity: ${r.capacity}
        `;

        list.appendChild(li);
    });

});