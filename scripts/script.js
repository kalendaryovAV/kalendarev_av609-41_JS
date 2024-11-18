let but_clk=document.querySelector(".request-call-button");
but_clk.addEventListener("click", () => {
    let section_new = document.createElement("section");
    section_new.classList.add("new_class");
    section_new.innerHTML=document.querySelector(".input-name").value;
    but_clk.after(section_new);
})