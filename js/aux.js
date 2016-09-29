document.getElementById('tags')
  .addEventListener('change', function(el){
    var value = this.options[this.selectedIndex].value;
    var txt = location.origin;
    if(value !== '-'){
      txt = txt.concat('/tags/').concat(value)
    }
    location.replace(txt)
  })
