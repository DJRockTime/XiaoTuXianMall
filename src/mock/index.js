import Mock from 'mockjs';

const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push({
        id: Mock.mock('@guid'),
        name: Mock.mock('@cname'),
        age: Mock.mock('@integer(1, 100)')
    });
}

export default [
    {
        url: '/list',
        method: 'get',
        response: () => {
            return arr;
        }
    },
    {
        url: 'de/:id',
        method: 'delete',
        response: () => {
            const index = arr.findIndex((item) => item.id === req.query.id);
            if (index > -1) {
                arr.splice(index, 1);
                return { success: true };
            } else {
                return { success: false };
            }
        }
    }
];
