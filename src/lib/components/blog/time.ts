
    export function readingTime(text) : string{
        let number = countWords(text);
        if(number < 200){
            return 'less than a minute';
        }
        else if(number > 200 && number < 500){
            return 'about two minutes';
        }
        else {
            return 'more than two minutes';
        }
    }

    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }