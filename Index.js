function computeMultiplesSum(n){
    S = 0;
    for(i=0 ; i<n ; i++){
        if(i%3===0 || i%5===0 || i%7===0){
            S = S + i;
        }
    }
    return S;

}

computeMultiplesSum(n);