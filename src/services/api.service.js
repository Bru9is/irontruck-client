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

  async editProfile(user) {
    return await this.api.put("/edit-profile", user);
  }

  async createPost(post) {
    return await this.api.post("/new-post", post);
  }

  async getPostById(postId) {
    return await this.api.get(`/user-posts/${postId}`);
  }

  async editPost(postId, post) {
    return await this.api.put(`/edit-post/${postId}`, post);
  }

  async createProposal(proposal) {
    return await this.api.post("/new-proposal", proposal);
  }

  async getPosts() {
    return await this.api.get("/user-posts");
  }

  async getActivePosts() {
    return await this.api.get("/all-posts?status=active");
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

  async deletePost(postId) {
    return await this.api.delete(`/delete-post/${postId}`);
  }

  async uploadFile(fileData) {
    const res = await this.api.post('/user/upload', fileData)
    return res.data
  }

  async rejectProposal(proposalId) {
    return await this.api.put(`/${proposalId}/reject`);
  }

}

export default new ApiService();
