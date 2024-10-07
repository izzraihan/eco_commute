@extends('layouts.app')

@section('content')
<div class="dashboard">
    <div class="row">
        <!-- Real-Time Traffic & Transport Info -->
        <div class="col-md-6">
            <h3>Real-Time Traffic & Transport Info</h3>
            <div class="card mb-3">
                <div class="card-body">
                    <div id="map-container" class="mb-3">
                        <div id="map" style="height: 200px; background: lightgray;">Map here</div>
                    </div>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-outline-primary">Bus</button>
                        <button class="btn btn-outline-primary">Train</button>
                        <button class="btn btn-outline-primary">MRT</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- My Rewards -->
        <div class="col-md-6">
            <h3>My Rewards</h3>
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>Points Collected: 1500</strong></p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#voucherModal">View Vouchers</button>
                        <button class="btn btn-primary">Redeem Points</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Daily Challenges & Achievements -->
    <div class="row mt-3">
        <!-- Daily Challenges -->
        <div class="col-md-6">
            <h3>Daily Challenges</h3>
            <div class="card mb-3">
                <div class="card-body">
                    <p>Walk 5000 steps today</p>
                    <progress value="3000" max="5000" class="progress-bar"></progress>
                    <p>Take public transport twice today</p>
                    <progress value="1" max="2" class="progress-bar"></progress>
                </div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="col-md-6">
            <h3>Achievements</h3>
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="achievement">
                                <i>🎖️</i>
                                <p>Walked 100 km</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="achievement">
                                <i>🏅</i>
                                <p>Used public transport 50 times</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Voucher Modal -->
<div class="modal fade" id="voucherModal" tabindex="-1" aria-labelledby="voucherModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="voucherModalLabel">Available Vouchers</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul>
                    <li>20% off Bus Fare</li>
                    <li>Free Train Ride</li>
                    <li>10% off MRT Fare</li>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
