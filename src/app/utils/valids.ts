// arrow function
export const emailValid = (email: string) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export const nameSurnameValid = (name: string): string => { // bu kod satırının amacı, bir isim veya soyisim geçerliliğini kontrol etmektir.
    const data = name.trim() // trim() metodu, bir string'in başındaki ve sonundaki boşlukları kaldırır.
    let status = false
    let words = ''
    if (data.length >= 5 && data.length <= 20) { // eğer veri uzunluğu 4 ile 20 karakter arasında ise
        const arr = data.split(" ") // split() metodu, bir string'i belirli bir ayırıcıya göre böler ve bir dizi (array) döner.
        if (arr.length > 1) { // eğer dizi uzunluğu 2 ise
            for (let i = 0; i < arr.length; i++) { // dizi uzunluğu kadar döngü oluşturur
                const item = arr[i] // dizinin i. elemanını alır
                if (item.length > 1){
                    status = true
                    words += firstCharUpper(item) + ' ' // words değişkenine item'in ilk harfini büyük yaparak ekler
                } else {
                    status = false
                }
        }
    }
}
    console.log(words)
    return status === true ? words.trim() : ''
}


export const firstCharUpper = (item:string) : string => {
    item = item.toLocaleLowerCase('tr')
    const first = item[0].toLocaleUpperCase('tr')
    item = item.substring(1, item.length)
    item = first+item
    return item
}
    