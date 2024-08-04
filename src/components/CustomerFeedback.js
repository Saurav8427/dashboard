import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body testimonials">
          <h5>Customer's Feedback</h5>
          <div className="feedback">
            <p>
              <strong>
                <img
                  src="/users/6.jpg"
                  class="rounded-circle"
                  alt="Circular"
                  width="25"
                />
                Jenny Wilson
              </strong>
            </p>
            <p>
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star"></i>
            </p>
            <p className="review">
              The food was excellent and so was the service. I had the mushroom
              risotto with scallops which was awesome. I had a burger with
              greens (gluten-free) which was also very good. They were very
              conscientious about gluten allergies.
            </p>
            <hr></hr>
          </div>
          <div className="feedback">
            <p>
              <strong>
                <img
                  src="/users/8.jpg"
                  class="rounded-circle"
                  alt="Circular"
                  width="25"
                />
                Dianne Russell
              </strong>
            </p>
            <p>
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>
            </p>
            <p className="review">
              We enjoyed the Eggs Benedict served on homemade focaccia bread and
              hot coffee. Perfect service.
            </p>
            <hr></hr>
          </div>
          <div className="feedback">
            <p>
              <strong>
                <img
                  src="/users/9.jpg"
                  class="rounded-circle"
                  alt="Circular"
                  width="25"
                />
                Devon Lane
              </strong>
            </p>
            <p>
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star"></i>
            </p>
            <p className="review">
              Normally wings are wings, but theirs are lean meaty and tender,
              and cooked to perfection. I had a burger with greens (gluten-free)
              which was also very good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerFeedback;
