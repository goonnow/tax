window.types = {
    'income': [
        {
        desc: 'เงินเดือนทั้งปี',
        placeholder: '120000',
        predefined: true
    },
    {
        desc: 'โบนัส',
        placeholder: '12000',
        predefined: true
    },
    {
        desc: 'เงินปันผล และรายได้อื่นๆ',
        placeholder: '5000'
    }
    ],
    'deduction': [
        {
        desc: 'ค่าใช้จ่าย',
        predefined: true,
        value: 0,
        autoCal: true,
        depend: {
            percent: 0.4,
            maxValue: 60000
        }
    },
    {
        desc: 'ค่าลดหย่อนส่วนตัว',
        autoCal: true,
        value: 30000,
        predefined: true
    },
    {
        desc: 'คู่สมรส',
        autoCal: true,
        value: 30000,
        modifier: {
            title: 'พิการ',
            value: 30000
        }
    },
    {
        desc: 'บิดา',
        autoCal: true,
        value: 30000,
        modifier: {
            title: 'พิการ',
            value: 30000
        }
    },
    {
        desc: 'มารดา',
        autoCal: true,
        value: 30000,
        modifier: {
            title: 'พิการ',
            value: 30000
        }
    },
    {
        desc: 'LTF ',
        placeholder: '5000'
    },
    {
        desc: 'RMF',
        placeholder: '5000'
    }
    ]
};
