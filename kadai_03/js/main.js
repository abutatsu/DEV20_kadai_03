(() =>
{
    'use strict';
    
    const button = document.querySelector('button');
    const p = document.querySelector('p');

    function getResult()
    {
        const bday = moment(document.querySelector('input').value);

        if (!bday.isValid())
        {
            return '日付が無効です！';
        }

        const now = moment();
        const age = now.diff(bday, 'year');
        const days = now.diff(bday, 'day');

        const thisBirthday = bday.clone().year(now.year());
        let nextBirthday;

        if (now.isSameOrAfter(thisBirthday))
        {
            nextBirthday = thisBirthday.clone().add(1, 'year');
        } else
        {
            nextBirthday = thisBirthday;
        }

        // console.log(nextBirthday.diff(now, 'day', true));
        const left = Math.ceil(nextBirthday.diff(now, 'day', true));

        return`今、${age}歳です！生まれてから${days}日たちました！次の誕生日は${nextBirthday.format('LL')}であと${left}日です！`;
    }

    button.addEventListener('click', () =>
    {
        p.textContent = getResult();
    });
    // const d = moment('2025-02-30');
    // console.log(d.isValid()); //→「false」02-30があり得ないので
    // const d1 = moment('2025-02-03');
    // const d2 = moment('2025-02-05');
    // const d3 = moment('2025-02-08');
    // console.log(d1.isBefore(d2));
    // console.log(d1.isAfter(d2));
    // console.log(d1.isSame(d2));
    // console.log(d2.isBetween(d1, d3));
    // console.log(d2.isLeapYear());

    // const start = moment('2025-05-25 08:00:00');
    // const end = moment('2025-05-25 10:30:00');
    // console.log(end.diff(start, 'hour', true));
    // const posted = moment('2018-05-25 08:00:00');
    // const posted = moment('2021-05-25 13:50:00');
    // console.log(posted.fromNow());

    // const d = moment('2025-05-25 13:01:23')
    // console.log(d.clone().add(3, 'day').format('LLLL'));
    // console.log(d.clone().subtract(3, 'year').format('LLLL'));
    // console.log(d.clone().add({ y: 1, M: 2 }).format('LLLL'));


    // console.log(d.clone().set('year', 2020).format('LLLL')); //←clone()は元の数値を残す
    // console.log(d.get('year'));

    // console.log(d.get('y'));
    // console.log(d.get('M')+1); //0-11
    // console.log(d.get('D'));
    // console.log(d.get('d')); //曜日 0-6
    // console.log(d.get('h'));
    // console.log(d.get('m'));
    // console.log(d.get('s'));
    // console.log(d.get('ms'));

    // console.log(d.year());
    // console.log(d.month());
    // console.log(d.date());
    
    // console.log(d.format('HH:mm:ss'));
    // console.log(d.format('HH:mm:ss a'));
    // console.log(moment('2025-05').daysInMonth());
    // console.log(d.toArray()); //←配列
    // console.log(d.toObject()); //←オブジェクト
    // console.log(d.format('[Today]:L'));

    // const d = moment('2021-05-25');
    // console.log(d.format('LL'));
    // const input = document.querySelector('input');
    // const button = document.querySelector('button');
    // const p = document.querySelector('p');

    // button.addEventListener('click', () =>
    // {
        // const d = new Date(input.value);
        // p.textContent = `${ d.getFullYear() }年${ d.getMonth() + 1 }月${ d.getDate() }日`;
        // 月は0～11を返すので＋１する
        // const d = moment(input.value);
        // p.textContent = d.isValid() ? d.format('LL') : '無効な日付です';
        // d.format('LL')⇒年と月にしてくれるおまじない
        
    // });
})();