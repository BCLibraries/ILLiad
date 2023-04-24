/*
Custom JS for request page functions
*/

$(document).ready(function () {

    /*
    Listeners for displaying hidden fields
    */

    document.getElementById('AcceptNonEnglish').onchange=function(){
        if (document.getElementById('AcceptNonEnglish').value == 'yes') {
            document.getElementById('AcceptableLanguages').style.display='block';
            document.getElementById('AcceptableLanguages').classList.add('flash');
            setTimeout(function() {
                document.getElementById('AcceptableLanguages').classList.remove('flash');
            }, 300);
        } else { document.getElementById('AcceptableLanguages').style.display='none'; }
    }

    document.getElementById('ItemInfo1').onchange=function(){
        if (document.getElementById('ItemInfo1').value == 'Remote User') {
            document.getElementById('remote-user').style.display='block';
            document.getElementById('remote-user').classList.add('flash');
            setTimeout(function() {
                document.getElementById('remote-user').classList.remove('flash');
            }, 300);
        } else { document.getElementById('remote-user').style.display='none'; }
    }

    /*
    Functions for assembling the Notes field
    */
    
    $("#AcceptableLanguages").on('change', '#AcceptableLanguagesInput', updateNotes);
    $("#notes-div").on('change', '#NotesField', updateNotes);
    $("#remote-user").on('change', '#RemoteUser', updateNotes);
    
    function updateNotes() {
        var value = '';
        if ($('#AcceptableLanguagesInput').val().length != 0) {
            value += 'Acceptable languages:\n' + $('#AcceptableLanguagesInput').val();
        }

        if ($('#RemoteUser').val().length != 0) {
            value += '\n-----\nRemote User Address:\n' + $('#RemoteUser').val();
        }

        if ($('#NotesField').val().length != 0) {
            value += '\n-----\nNotes:\n' + $('#NotesField').val();
        }
        
        $('#Notes').val(value);
        console.log($('#Notes').val());
    }

    /*
    For making the select only two options lol
    */
    $('select option[value="<#PARAM name='AcceptNonEnglish'>"]').attr('selected','true');
});