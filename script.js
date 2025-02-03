// Sample data for demonstration
const sampleSummary = "In this Tweet Space, participants discussed the future of AI in social media, emphasizing the importance of ethical AI and user privacy.";
const sampleTweet = "The future of AI in social media is bright! Excited to see how ethical AI and user privacy will shape the next generation of platforms. #AI #SocialMedia";

// Summarize Tweet Spaces
document.getElementById('summarizeBtn').addEventListener('click', () => {
  const summaryOutput = document.getElementById('summaryOutput');
  summaryOutput.textContent = sampleSummary;
});

// Generate Smart Tweets
document.getElementById('generateTweetBtn').addEventListener('click', () => {
  const tweetOutput = document.getElementById('tweetOutput');
  tweetOutput.textContent = sampleTweet;
});