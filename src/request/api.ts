import service from "@/request/index";



// 获取平台数据
export async function getStatistics() {
    return service({
        url: "portal/statistics",
        method: "GET"
    })
}

// 获取需求数据
export async function getPurchase() {
    return service({
        url: "portal/purchase-messages?page=0&size=100&sort=createTime%2Cdesc",
        method: "GET",
    })
}


// 获取供应数据

// 三七头
export async function getSupplyHead() {
    return service({
        url: "mall/products?sort=qty%2Cdesc&sort=seq%2Cdesc&sort=createTime%2Cdesc&category=1&page=0&size=1000",
        method: "GET",
    })
}

// 三七剪口
export async function getSupplyMouth() {
    return service({
        url: "mall/products?sort=qty%2Cdesc&sort=seq%2Cdesc&sort=createTime%2Cdesc&category=2&page=0&size=1000",
        method: "GET",
    })
}

// 三七根
export async function getSupplyRoot() {
    return service({
        url: "mall/products?sort=qty%2Cdesc&sort=seq%2Cdesc&sort=createTime%2Cdesc&category=3&page=0&size=1000",
        method: "GET",
    })
}

// 获取今日价格
export async function getPrice(marketId: string) {
    return service({
        url: "portal/daily-price/ratio?marketId=" + marketId,
        method: "GET",
    })
}

// 获取行情
export async function getQuotation(marketId: string) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const endDate = `${year}-${month}-${day}`

    return service({
        url: "portal/datasets/4/records?startDate=2020-01-01&endDate=" + endDate + "&marketId="+marketId,
        method: "GET",
    })
}
