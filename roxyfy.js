//start of custom jqury_plugin roxyfy by ashok choudhary.
var roxy_currentopen = '';
function openCustomRoxy2(id){
   roxy_currentopen = id;
  $('#roxyCustomPanel2').dialog({modal:true, width:875,height:600});
}
function closeCustomRoxy2(val){
   $('#'+roxy_currentopen).val(val);
   roxy_currentopen = false;
   $('#roxyCustomPanel2').dialog('close');
}
(function($){
    function generateui(element){
        randomnum = Math.floor((Math.random() * 10000) + 111);
        $(element).attr('id',randomnum);
        return randomnum;
    }
    $.fn.roxyfy = function(){
        if(this.length > 0){
            if (typeof jQuery.ui == 'undefined') {
            // UI not loaded
            //console.log('Jquery ui is not defined');
            alert('Roxy Filemanager Require Jquery Ui js + css files to work');
            return this;
            }
            //add data to html doc
            $('body').append('<div id="roxyCustomPanel2" style="display: none;"><iframe id="roxyiframe" src="/fileman/index.html?integration=custom&type=files&txtFieldId=txtSelectedFile" style="width:100%;height:100%" frameborder="0"></iframe></div>');
            //load custom roxy function
            this.each(function(){
                $(this).on('click',function(){
                    v_id = $(this).attr('id') || generateui(this);
                    openCustomRoxy2(v_id);
                });
            return this;
            });
        }else{
            console.info('No Element to Roxyfy By Ashok');
        }
    }
}(jQuery));