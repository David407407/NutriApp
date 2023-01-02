(function () {
    function binarySearch (value, list) {
        const first = 0;
        const last = list.length - 1;

        while(first <= last) {
            const middle = first + last / 2;
            if(value == list[middle]) {
                return list[middle];
            } else if (value < list[middle]) {
                last--;
            } else {
                first == middle;
            }
        }
    }

    const list = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
    binarySearch(list, 20);
})();