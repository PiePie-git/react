export const fetchDashboardData = async ({ signal }) => {
    const response = await fetch('/api/dashboard.json', { signal });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
  
// 其他API函数
export const redirectIfUser = async ({ request }) => {
    // your implementation here
};
  
export const logoutUser = async ({ request }) => {
    // your implementation here
};
  