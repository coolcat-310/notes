function check(arrform){
    console.log('submit all forms');
    console.log(arrform);
    for(let i=0; i< arrform.length; i++) {
        const str = arrform[i]['className'];
        const form = arrform[i]['form'];
        let ans = $(`input[name=${str}]:checked`, form).val();
        console.log(`${str}: ${ans}`);
    }
    // let ans = $(`input[name=${className}]:checked`, arrform[0]).val();

};

function displayResult(form, className){
    console.log('button is click');
    const str = `input[name=${className}]:checked`;
    let ans = $(str, form).val();
    console.log(`${className}: ${ans}`);
}

