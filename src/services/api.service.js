import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });

    this.api.interceptors.request.use((config) => {
      const storedUser = localStorage.getItem("loggedInUser");
    
      const loggedInUser = JSON.parse(storedUser || '""');
    
      if (loggedInUser.token) {
        config.headers = {
          Authorization: `Bearer ${loggedInUser.token}`,
        };
      }
    
      return config;
    });
  }

  async signUp(user) {
    return await this.api.post("/signup", user);
  }

  async login(user) {
    return await this.api.post("/login", user);
  }

  async createPost(post) {
    return await this.api.post("/new-post", post);
  }

  async createProposal(proposal) {
    return await this.api.post("/new-proposal", proposal);
  }

  async getPosts() {
    return await this.api.get("/user-posts");
  }

  async getActivePosts() {
    return await this.api.get("/all-posts?active=true");
  }

  async getCompany() {
    return await this.api.get("/profile");
  }

  async getAllProposals(postId) {
    return await this.api.get(`/${postId}/all-proposals`);
  }

  async getCompanyProposals() {
    return await this.api.get(`/company/proposals`);

  }

  async acceptProposal(proposalId) {
    return await this.api.put(`/${proposalId}/accept`);
  }

  async getCompanyWhoAcceptedProposal(proposalId) {
    return await this.api.get(`/${proposalId}/accept`);
  }

}

export default new ApiService();
