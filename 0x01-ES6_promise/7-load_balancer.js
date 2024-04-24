export default function loadBalancer(chinaRDownload, USADownload) {
  return Promise
    .race([chinaRDownload, USADownload])
    .then((result) => result);
}
