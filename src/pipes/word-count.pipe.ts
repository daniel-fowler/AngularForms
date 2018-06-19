import {Pipe} from '@angular/core';

@Pipe({
    name: 'wordCount'
})

export class WordCountPipe {
    transform(value: string) {
        if (!value)
            return 0;

        var result = value.replace(' ', '');
        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;

        return wordCount;
    }
}