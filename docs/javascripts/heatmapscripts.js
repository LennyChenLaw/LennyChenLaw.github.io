// Replace 'YOUR_USERNAME' with your GitHub username
const username = 'ClearlyKyle';
const endpoint = `https://api.github.com/users/${ username }/contributions`;

fetch(endpoint)
	.then(response => response.json())
	.then(data =>
	{
		const heatmapContainer = document.getElementById('heatmap');
		heatmapContainer.innerHTML = '';

		for (const contribution of data)
		{
			const tile = document.createElement('div');
			tile.classList.add('heatmap-tile');
			tile.style.backgroundColor = getHeatmapColor(contribution.count);
			heatmapContainer.appendChild(tile);
		}
	})
	.catch(error => console.error('Error fetching heatmap data:', error));

function getHeatmapColor(count)
{
	// You can define your own logic to map count to color
	// For simplicity, let's assume:
	// - 0: white
	// - 1-4: light green
	// - 5-9: darker green
	// - 10+: darkest green
	if (count === 0) return 'white';
	else if (count >= 1 && count <= 4) return '#c6e48b';
	else if (count >= 5 && count <= 9) return '#7bc96f';
	else return '#239a3b';
}
