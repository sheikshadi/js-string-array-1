const products = [
    'Dell hardcore i39 200GB laptop',
    'iphone 1TB camera flashLight phone',
    'yellow laptop commercial yoga latptop',
    'LG supernova phone',
    'HTC supper laptop',
    'samsug ht44 laptop',
    'purple color phone with phone',
];

const searching = 'laptop';

const output = [];
for(const product of products){
    if(product.indexOf(searching) != -1){
        output.push(product);
    }
}