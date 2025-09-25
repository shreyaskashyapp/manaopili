import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const CATEGORIES = (obj) => {
  return obj.types
}


export const findSum = (results, key) => {

  const data = results?.filter(item => item.category === key)
  const ratings = data?.map(item => {
    return item.ratings
  })

  const accumalate = ratings.reduce((acc, curr) => {
    return {
      people: acc.people + curr.people,
      process: acc.process + curr.process,
      technology: acc.technology + curr.technology
    }
  }, { people: 0, process: 0, technology: 0 })

  return accumalate
}

const findAverageFromKey = (results, key) => {

  const data = results?.filter(item => item.category === key)
  const ratings = data?.map(item => {
    return item.ratings
  })

  const accumalate = findSum(results, key)

  const average = Object.keys(accumalate).reduce((acc, key) => {
    acc[key] = accumalate[key] / ratings.length;
    return acc;
  }, {});

  return { average, category: key };

}

export function parseResults(results, config, obj) {
  switch (config) {
    case 'CSM':
      const result = CATEGORIES(obj).map(category => {
        return findAverageFromKey(results, category)
      })
      return result

      break;
    default:
  }
}

export function parseToGraph(rawData = []) {
  if (!Array.isArray(rawData)) return;
  const barData = rawData?.map((item, index) => {
    return Object.keys(item?.average).map((key, index) => {
      return {
        name: key,
        value: item?.average[key],
        fill: 'hsl(var(--chart-1) / 0.8)',
        title: item?.category
      }
    })
  })

  return barData;
}

export function getLengthFromModules(obj) {
  const modules = obj?.categories.flatMap(category => category.modules)
  return modules.length
}

export function getNumberOfZeros(data, key) {
  const ratings = data?.map(item => {
    return item.ratings
  })

  const zeros = ratings.filter(item => item[key] === 0)
  return zeros.length
}

export const checkIfMobile = () => {
  const userAgent = window.navigator.userAgent;
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  return mobile;
};

export async function activateServer() {
  try {
    const response = await axios.get('https://backend-manaopili.onrender.com/')
    if (response.status === 200) {
      console.log("Server activated", response.status)
    }
  }
  catch (err) {
    console.error(err.message)
  }
  return null;
}

export function topScroll() {
  window.scrollTo(0, 0)
}